import React from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading'
import LoadMore from '../LoadMore/LoadMore'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
class Header extends React.Component {
    state = {
        news: [],
        page: 1,
        loadingStatus: 'show',
        tab: this.props.tabbars[this.props.tab].url.slice(1) === 'home' ? 'share' : this.props.tabbars[this.props.tab].url.slice(1)
    }
    // :style
    filterNews(arr, searchInputText) {
        return arr.filter((item) => {
            if (item.title.indexOf(searchInputText) > -1) {
                return item
            }
        }).map((item, index) => {
            return (
                <Link key={index} to={{
                    pathname: "/detail",
                    search: `?id=${index}`,
                }} className="weui-media-box weui-media-box_appmsg">
                    <div onClick={
                        this.showGallery.bind(this, item.author ? item.author.avatar_url : '')
                    } className="weui-media-box__hd">
                        <img onLoad={this.loadImgSuccess.bind(this)} onError={this.loadImgFail.bind(this)} className="weui-media-box__thumb" src={item.author ? item.author.avatar_url : ''} alt="" />
                    </div>
                    <div className="weui-media-box__bd">
                        <h4 className="weui-media-box__title">{item.title}</h4>
                        <p className="weui-media-box__desc">{item.author ? item.author.loginname : '无名'}</p>
                    </div>
                </Link>
            )
        })
    }
    // 图片加载完
    loadImgSuccess(e) {
        // console.log(e)
    }
    loadImgFail(e) {
        // console.log(e)
    }
    // 显示预览图片
    showGallery(imgUrl) {
        this.props.dispatch({
            type: "TOGGLEGALLERY",
            isShowGallery: true,
            imgUrl
        })
        console.log(imgUrl)
    }
    render() {
        console.log(this)
        return (
            <div style={{
                paddingBottom: '50px'
            }} className="weui-panel weui-panel_access">
                <div className="weui-panel__bd">
                    {this.filterNews(this.state.news, this.props.searchInputText)}

                </div>
                <div style={{
                    display: this.state.loadingStatus === 'show' || this.state.news.length >= 30 ? 'none' : 'block'
                }} onClick={
                    this.loadMore.bind(this, this.state.tab)
                } className="weui-panel__ft">
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
                <Loading status={this.state.loadingStatus} />
                <LoadMore status={this.state.loadingStatus} limit={this.state.news.length} />
            </div>
        )
    }

    componentDidMount() {
        // 页面第一次加载触发的
        const tab = this.state.tab
            console.log(tab)
        // 如果缓存有的话，读缓存
        if (sessionStorage.getItem(tab)) {
            const news = JSON.parse(sessionStorage.getItem(tab))
            this.setState({
                news,
                loadingStatus: 'hide'
            })
        } else {
            // 否则发请求，并把数据加进缓存里面
            this.loadMore(tab);
        }
    }

    async loadMore(tab) {
        this.setState({
            loadingStatus: 'show'
        })
        const news = (await axios.get('https://cnodejs.org/api/v1/topics', {
            params: {
                page: this.state.page,
                limit: 10,
                tab
            }
        })).data.data
        sessionStorage.setItem(tab, JSON.stringify([...this.state.news, ...news]))
        // await new Promise((resolve) => { setTimeout(() => { resolve() }, 1000) })
        this.setState({
            page: ++this.state.page,
            news: [...this.state.news, ...news],
            loadingStatus: 'hide'
        })
    }
}
export default connect((state) => {
    return state
})(Header)