import React, { Component } from 'react'
import { connect } from 'dva';
export default connect((state)=>{
    return state
})(class Search extends Component {
    testClick(){
        this.props.dispatch({
            type: 'students/getStudents',
            payload:{
                skill:['ps','js','css']
            }
        })
    }
    render() {
        console.log(this)
        return (
            <div onClick={
                this.testClick.bind(this)
            } className="weui-search-bar" id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label className="weui-search-bar__label" id="searchText" style={{
                        transformOrigin: '0px 0px',
                        opacity: 1,
                        transform: 'scale(1, 1)'
                    }}>
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
})