import { put } from 'redux-saga/effects'

const modelname = 'counter';
const model = {
  name: modelname,
  state: {
    value: 0,
    inited: false, 
  },

  effects: {
    *incr_delay(action) {
      const delay = (ms) => new Promise(res => setTimeout(res, ms))
      yield delay(1000)
      yield put({ type: `${modelname}/incr` })
    },
  },

  reducers: {
    onLoad(state, {data:{dispatch, history}} ) {
      // ... do these when the model is loaded
      console.log('counter onLoad:', dispatch, history);
    },

    init(state, action) {
      if (!state.inited) {
        const { value } = action.data;
        return { ...state, inited:true, value }
      }
    },

    incr(state, action) {
      let { value } = state;
      const { delta } = action.data;
      value += delta;
      return { ...state, inited:true, value }
    },
  },
}

export default model
