import React from 'react'
import './SearchBar.css'
// 无状态
const data = {
    text: '搜索'
}
// 有状态组件
class SearchBar extends React.Component {
    // 有状态
    state = {
        bool: false,
        searchInputValue: ''
    }
    toggle() {
        // 单向数据流
        // V->M必须
        this.setState({
            bool: !this.state.bool
        })
    }
    getSearchValue(e) {
        console.log(e.target.value)
        this.setState({
            searchInputValue: e.target.value
        })
    }
    render() {
        return (
            <div className={
                this.state.bool ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'
            } id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input value={this.state.searchInputValue} onChange={
                            this.getSearchValue.bind(this)
                        } type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a onClick={
                            ()=>{
                                console.log(this)
                                this.setState({
                                    searchInputValue:''
                                })
                            }
                        } className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={
                        this.toggle.bind(this)
                    } className="weui-search-bar__label" id="searchText" style={{
                        transformOrigin: "0px 0px",
                        opacity: 1,
                        transform: "scale(1, 1)"
                    }}>
                        <i className="weui-icon-search"></i>
                        <span>{data.text}</span>
                    </label>
                </form>
                <a onClick={
                    this.toggle.bind(this)
                } href="#top" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}
export default SearchBar