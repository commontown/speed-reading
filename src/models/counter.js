import { put } from 'redux-saga/effects'

const modelname = 'counter';
const model = {
  name: modelname,
  state: {
    contentTimeTotal: 30,   // 文章时间
    questionTimeTotal: 20, // 答题时间
    pageStatus: 1,//页面状态 1文章页面 2文章倒计时结束页面 3题目页面
    read_time: 0,
    quiz_time: 0,
  },

  effects: {
    *incr_delay(action) {
      const { data } = action.data
      const delay = (ms) => new Promise(res => setTimeout(res, ms))
      yield delay(1000)
      yield put({ type: `${modelname}/incr`, data })
    },
  },

  reducers: {
    onLoad(state, { data: { dispatch, history } }) {
      // ... do these when the model is loaded
      console.log('counter onLoad:', dispatch, history);
    },
    // 重置时间
    Reset(state, action) {
      const { contentTimeTotal, questionTimeTotal, pageStatus } = action.data;

      return { ...state, contentTimeTotal, questionTimeTotal, pageStatus }

    },
    init(state, action) {
      if (!state.inited) {
        const { value } = action.data;
        return { ...state, inited: true, value }
      }
    },
    changePageStatus(state, action) {
      let { pageStatus } = state;
      const { status } = action.data;
      pageStatus = status
      return { ...state, pageStatus }
    },

    incr(state, action) {
      let { contentTimeTotal, questionTimeTotal, pageStatus } = state;
      const { delta } = action.data;
      if (pageStatus == 1) {
        if (contentTimeTotal > 0) {
          contentTimeTotal -= delta;
        }
      } else {
        if (questionTimeTotal > 0) {
          questionTimeTotal -= delta;
        }
      }

      return { ...state, contentTimeTotal, questionTimeTotal }
    },
    usedReadTime(state, action) {
      const { read_time } = action.data;
      return { ...state, read_time }
    },
    usedQuizTime(state, action) {
      const { quiz_time } = action.data;
      return { ...state, quiz_time }
    },
  },
}
export default model
