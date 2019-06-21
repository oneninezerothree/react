export default (state = {
    water: 'sweet',
    skill: ['ps', 'js', 'css'],
    searchInputText: '',
    isShowGallery: false,
    imgUrl: '',
    tabbars: [{
        icon: './images/icon_tabbar.png',
        url: '/home',
        title: '分享',
        isBadge: false,
        badge: 8
    }, {
        icon: './images/icon_tabbar.png',
        url: '/ask',
        title: '提问',
        isBadge: false,
        badge: 0
    }, {
        icon: './images/icon_tabbar.png',
        url: '/job',
        title: '职业',
        isBadge: true,
        badge: 0
    }, {
        icon: './images/icon_tabbar.png',
        url: '/good',
        title: '点赞',
        isBadge: false,
        badge: 0
    }]
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