
export default {

    namespace: 'students',
    // 状态
    state: {
        name: 'abc'
    },
    // 减缓器
    reducers: {
        getStudents(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
