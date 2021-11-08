import React from 'react'
import { Provider } from "react-redux"
import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga';
import { takeEvery, all, /* put, take, */ } from 'redux-saga/effects'
import { createBrowserHistory } from "history";

const initialStates = {};
const models = [];

let sagaTask = null;
function* rootSaga() {
  const watches = [];
  models.forEach(model => {
    const { name, effects } = model;
    for (let fname in effects) {
      watches.push(
        (function* () {
          yield takeEvery(`${name}/${fname}`, effects[fname])
        })()
      )
    }
  });
  yield all(watches)
}

const rootReducer = (state, action) => {
  const { type } = action;
  const [mdlname, rdrname] = type.split('/');

  // meta replace state: special treatment
  if (mdlname === '@@meta') {
    if (rdrname === 'replace_state') return action.data.state;
    return state;
  }

  const model = models.find(mdl => mdl.name === mdlname);

  if (model && model.reducers) {
    const reducer = model.reducers[rdrname];
    //     console.log(`ctapp: reducer ${type}`, 'reducer:', reducer, 'model:', model);
    if (reducer) {
      const mystate = state[mdlname];
      const newstate = reducer(mystate, action);
      if (newstate) return { ...state, [mdlname]: newstate };
    }
    else console.warn(`--ctapp: reducer: ${type} not found`);
  }
  else console.warn(`--ctapp: reducer: ${type} not found (model not ready)`);
  return state
}

// redux devtools
const loadDevTools = () =>
  process.env.NODE_ENV === 'development' && typeof (window) !== 'undefined' && window.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      // enable redux inspector to show function values (pagetree.js define component state)
      serialize: {
        options: {
          undefined: true,
          function: (fn) => `${fn.name}()`,
        }
      }
    })
    : f => f;

// ---- the beef
const sagaMiddleware = createSagaMiddleware()
const store = reduxCreateStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware), loadDevTools()));
const dispatch = (type, data) => store.dispatch({ type, data })

const ReduxSagaProvider = ({ children }) => {
  React.useEffect(_=>{
    // init saga
    sagaTask = sagaMiddleware.run(rootSaga);
    dispatch('@@meta/replace_state', { state: initialStates }); // set initial states
    console.log('--ctapp: framework loaded');
  },[]);

  //  - it will be called only once in browser, when React mounts
  return <Provider store={store}>{children}</Provider>
}

const includeModels = (imports, history) => {
//   console.log('includeModels:', imports);
  Promise.all(imports).then(mods => {
    if (!mods.length) return;

    sagaTask.cancel();
    mods.forEach(mod => {
      const model = mod['default'];
      // include new ones only
      if (typeof initialStates[model.name] ==='undefined') {
        models.push(model);
        initialStates[model.name] = model.state || {};
        if (typeof model.reducers['onLoad'] !== 'undefined') {
          dispatch(`${model.name}/onLoad`, { dispatch, history } );
        }
      }
    });
    sagaTask = sagaMiddleware.run(rootSaga);

//     dispatch(`counter/test`, {dispatch: 1} )
  })
}

// Dynamic: Router to make on-demand loading (on-demand not fully working yet)
const customHistory = createBrowserHistory(); // create a custom history
const Loading = ()=><div>...</div> // loading
const Dynamic = ({name, src, models}) => {
  const [ value, setValue ] = React.useState({Comp:null}); // must use object, cannot be Componetn or function, react will run it
  React.useEffect(_=>{
//       console.log('Dynamic:', name);
    const marr = models();
    if (marr.length) includeModels(marr, customHistory)
    src().then(({ default: Comp}) => {
      setValue({Comp})
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
//     console.log('load:', name, value.Comp?'loaded':'...')
  return value.Comp || Loading
}

export { store, dispatch, includeModels, Dynamic, ReduxSagaProvider }
