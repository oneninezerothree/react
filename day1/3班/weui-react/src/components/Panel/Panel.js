import React from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import LoadMore from '../LoadMore/LoadMore'
import { connect } from 'react-redux'
import { Link,withRouter  } from "react-router-dom";
import HOC from '../HOC/HOC'
class Panel extends React.Component {
    state = {
        news: [],
        // 页数
        page: 1,
        isShowLoading: true
    }
    showGallery(imgUrl) {
        console.log(imgUrl)
        // 触发action，把数据转载到state里面
        this.props.dispatch({
            type: "TOGGLEGALLERY",
            isShowGallery: true,
            imgUrl
        })
    }
    filterNews(arr, searchValue) {
        return arr.filter((item) => {
            if (item.title.indexOf(searchValue) > -1) {
                return item
            }
        }).map((item, index) => {
            // Link 声明式导航
            return (
                <Link key={index} to={{
                    pathname: "/detail",
                    search: `?id=${index}`,
                    hash: "#the-hash",
                    state: { fromDashboard: true }
                }} className="weui-media-box weui-media-box_appmsg">
                    <div onClick={
                        this.showGallery.bind(this, item.author.avatar_url)
                    } className="weui-media-box__hd">
                        <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                    </div>
                    <div className="weui-media-box__bd">
                        <h4 className="weui-media-box__title">{item.title}</h4>
                        <p className="weui-media-box__desc">{item.author.loginname}</p>
                    </div>
                </Link>
            )
        })
    }
    render() {
        return (
            <div className="weui-panel weui-panel_access">
                <p>{this.props.getSearchValue}</p>
                <div className="weui-panel__bd">
                    {this.filterNews(this.state.news, this.props.getSearchValue)}
                </div>
                <div style={{
                    display: this.state.isShowLoading || this.state.news.length >= 50 ? 'none' : 'block'
                }} onClick={this.loadMore.bind(this)} className="weui-panel__ft">
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
                <Loading status={
                    this.state.isShowLoading
                } />
                <LoadMore status={this.state.isShowLoading} limit={this.state.news.length} />
            </div>
        )
    }
    async loadMore() {
        this.setState({
            isShowLoading: true
        })

        const news = (await axios.get('https://cnodejs.org/api/v1/topics', {
            params: {
                limit: 10,
                page: this.state.page
            }
        })).data.data
        // 拿完数据等待一秒更新状态
        await new Promise((resovle) => {
            let time = 1;
            let timer = setInterval(() => {
                console.log(time);
                time === 1 ? (() => {
                    resovle();
                    clearInterval(timer)
                })() : time++
            }, 1000)
        })
        this.setState({
            page: ++this.state.page,
            news: [...this.state.news, ...news],
            isShowLoading: false
        })
        console.log(news)
    }
    shouldComponentUpdate() {
        if (this.state.news.length >= 50) {
            return false
        } else {
            return true
        }

    }
    componentDidMount() {
        console.log(this)
        // 首次加载
        this.loadMore();
    }
}
// connect负责连接redux
// withRouter负责连接router
export default HOC(withRouter(connect((state) => {
    return state
})(Panel)))