import React from 'react'
class Loading extends React.Component {
    state = {
        style: {
            opacity: 1,
            transition: 'opacity 0.1s linear 0s'
        }
    }
    render() {
        return (
            <div id="loadingToast" style={this.state.style}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className="weui-loading weui-icon_toast"></i>
                    <p className="weui-toast__content">数据加载中</p>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(props) {
        this.setState({
            style: props.status ? {
                opacity: 1,
                transition: 'opacity 0.1s linear 0s'
            } : {
                opacity: 0,
                display: 'none',
                transition: 'opacity 0.1s linear 0s'
            }
        })
    }
}
export default Loading