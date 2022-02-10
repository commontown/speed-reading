import { put, select } from 'redux-saga/effects'
import { config } from 'config'

const modelname = 'someone';
const model = {
  name: modelname,
  state: {
    results: null,
    score: {
      attempt_id: 124,
      result: 20
    },
    stats: []
  },

  effects: {
    *fetch(action) {
      let { address, state } = action.data;
      const needfetch = yield select(fullstate => (!fullstate[modelname][state]))
      if (needfetch) {
        const data = yield fetch(`${config.api.someone.index}/${address}`, {
          method: "GET",
          credentials: "include"
        })
          .then(res => res.json())
        console.log('data:', data);
        if (state == "results") {
          state = "store"
        }
        yield put({ type: `${modelname}/${state}`, data })
      }
    },
  },

  reducers: {
    // 
    store(state, action) {
      const { speedread } = action.data;
      const results = speedread

      return { ...state, results }
    },
    // completePassage 接口的数据 
    score(state, action) {
      const { speedread } = action.data;
      const score = speedread

      return { ...state, score }
    },
    // getStats 接口的数据 
    stats(state, action) {
      const { speedread } = action.data;
      const stats = speedread

      return { ...state, stats }
    },
  },
};

export default model
