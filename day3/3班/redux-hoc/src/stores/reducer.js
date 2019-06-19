export default (state = {
    author: 'yao',
    skill: ['ps','js','css']
}, action) => {
    switch (action.type) {
        case 'SETAUTHOR':
            return {
                ...state,
                author: action.name
            }
        default:
            return state
    }
}