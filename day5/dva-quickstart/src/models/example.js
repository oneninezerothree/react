
export default {

  namespace: 'example',
  // 状态
  state: {
    name: 'abc'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  // 减缓器
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
