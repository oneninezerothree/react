import React from 'react';
class LoadMore extends React.Component {
    state = {}
    render() {
        return (
            <div className="page__bd">
                {
                    this.props.status === 'show' ? (
                        <div className="weui-loadmore">
                            <i className="weui-loading"></i>
                            <span className="weui-loadmore__tips">正在加载</span>
                        </div>
                    ) : ''
                }
                {
                    this.props.limit >= 30 ? (
                        <div className="weui-loadmore weui-loadmore_line">
                            <span className="weui-loadmore__tips">暂无数据</span>
                        </div>
                    ):''
                }

                {/* <div className="weui-loadmore weui-loadmore_line weui-loadmore_dot">
                    <span className="weui-loadmore__tips"></span>
                </div> */}
            </div>
        )
    }
    componentWillReceiveProps(props) {
        console.log(props)
    }
}
export default LoadMore