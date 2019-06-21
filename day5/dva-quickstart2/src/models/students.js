
export default {

    namespace: 'students',

    state: {
        skill: ['ps', 'js']
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
