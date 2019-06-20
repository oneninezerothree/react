export default (state = {
    name: 'Yao',
    getSearchValue: '',
    // 处理预览图
    imgUrl: '',
    isShowGallery: false
}, action) => {
    switch (action.type) {
        case 'TOGGLEGALLERY':
            return {
                ...state,
                imgUrl: action.imgUrl,
                isShowGallery: action.isShowGallery
            }
        case 'GETSEARCHVALUE':
            return {
                ...state,
                getSearchValue: action.getSearchValue
            }
        default:
            return state
    }
}