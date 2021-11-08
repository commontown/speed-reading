import { put, select } from 'redux-saga/effects'
import { config } from 'config'

const modelname = 'someone';
const model = {
  name: modelname,
  state: {
    results: null,
  },

  effects: {
    *fetch(action) {
      const needfetch = yield select( fullstate => (!fullstate[modelname].results) )
      if (needfetch) {
        const { count } = action.data;
        const data = yield fetch(`${config.api.someone.index}/?results=${count}`, {
            method: "GET",
          })
          .then(res => res.json())
        console.log('data:', data);
        yield put({ type: `${modelname}/store`, data })
      }
    },
  },

  reducers: {
    store(state, action) {
      const { results } = action.data;
      return { ...state, results }
    },
  },
};

export default model
