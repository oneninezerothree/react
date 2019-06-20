export default (state = {
    water: 'sweet',
    skill: ['ps', 'js', 'css'],
    searchInputText: '',
    isShowGallery: false,
    imgUrl: ''
}, action) => {
    switch (action.type) {
        case 'HANDLEWATER':
            return {
                water: 'sault'
            }
        case 'TOGGLEGALLERY':
            return {
                ...state,
                imgUrl: action.imgUrl,
                isShowGallery: action.isShowGallery
            }
        case 'GETINPUTVALUE':
            return {
                ...state,
                searchInputText: action.searchInputText
            }
        default:
            return state
    }
}

// state
// getters
// mumtation
// action