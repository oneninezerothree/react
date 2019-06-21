import React from 'react';
import {connect} from 'react-redux'
const data = {
    span: '搜索',

}
class Search extends React.Component {
    cancel = '取消'
    state = {
        bool: !0,
        searchInputText: ''
    }
    toggle() {
        this.refs.input.focus();
        this.setState({
            bool: !this.state.bool
        })
    }
    getInputValue(e) {
        console.log(e.target.value)
        let searchInputText = e.target.value
        this.props.dispatch({
            type:"GETINPUTVALUE",
            searchInputText
        })
        this.setState({
            searchInputText
        })
    }
    searchClear() {
        this.refs.input.focus();
        this.setState({
            searchInputText: ''
        })
    }
    // :style
    render() {
        console.log(this)
        return (
            <div style={{
                paddingTop: '58px'
            }} className={
                this.state.bool ? 'weui-search-bar' : 'weui-search-bar weui-search-bar_focusing'
            } id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input ref="input" value={this.state.searchInputText} onChange={
                            this.getInputValue.bind(this)
                        } type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a onClick={this.searchClear.bind(this)} href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={
                        this.toggle.bind(this)
                    } className="weui-search-bar__label" id="searchText" style={{
                        transformOrigin: '0px 0px',
                        opacity: 1,
                        transform: 'scale(1, 1)'
                    }}>
                        <i className="weui-icon-search"></i>
                        <span>{data.span}</span>
                    </label>
                </form>
                <a onClick={
                    this.toggle.bind(this)
                } href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">{this.cancel}</a>
            </div>
        )
    }
}
export default connect((state)=>{
    // 1.subscribe
    // 2.getState
    return state
})(Search)