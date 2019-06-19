import React from 'react'
class LoadMore extends React.Component {
    render() {
        return (
            <div className="page__bd">
                <div style={{
                    display: this.props.status ? 'block' : 'none'
                }} className="weui-loadmore">
                    <i className="weui-loading"></i>
                    <span className="weui-loadmore__tips">正在加载</span>
                </div>
                <div style={{
                    display: this.props.limit >= 50 ? 'block' : 'none'
                }} className="weui-loadmore weui-loadmore_line">
                    <span className="weui-loadmore__tips">暂无数据</span>
                </div>
                {/* <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
                    <span className="weui-loadmore__tips"></span>
                </div> */}
            </div>
        )
    }
}
export default LoadMore