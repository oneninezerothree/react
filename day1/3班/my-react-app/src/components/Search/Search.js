import React from 'react';
import './Search.css';
// 无状态，数据写死的，数据不会变
const data = {
    text: '搜索123',
    bool: !0
}

// M->V
class Search extends React.Component {
    state = {
        bool:0
    }

    toggle(num,name){
        console.log('点击',this.state.bool,num,name)
        // this.state.bool = !this.state.bool
        // 这个地方跟Vue区别很大，需要调用this.setState的方法通知M层改变，不然如果直接改state视图是不会有响应
        this.setState({
            bool:!this.state.bool
        })
    }

    render(){
        console.log(this)
        return (
            <div className={
                this.state.bool?'weui-search-bar_focusing weui-search-bar':'weui-search-bar'
            } id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <button className="weui-icon-clear" id="searchClear"></button>
                    </div>
                    <label onClick={this.toggle.bind(this,123,'asdasdasd')} className="weui-search-bar__label" id="searchText">
                        <i className="weui-icon-search"></i>
                        <span>{data.text}</span>
                    </label>
                </form>
                <a href="#top" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}

export default Search
