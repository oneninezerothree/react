import React from 'react'
import { connect } from 'react-redux'

export default connect((state) => {
    return state
})(class Gallery extends React.Component {
    hideGallery(){
        // 触发action，把数据转载到state里面
        this.props.dispatch({
            type:"TOGGLEGALLERY",
            isShowGallery: false,
            imgUrl:''
        })
    }
    render() {
        return (
            <div className="weui-gallery" style={{
                display: this.props.isShowGallery?'block':'none'
            }}>
                <span className="weui-gallery__img" style={{
                    backgroundImage: `url(${this.props.imgUrl})`
                }}></span>
                <div onClick={this.hideGallery.bind(this)} className="weui-gallery__opr">
                    <a href="javascript:" className="weui-gallery__del">
                        <i className="weui-icon-delete weui-icon_gallery-delete"></i>
                    </a>
                </div>
            </div>
        )
    }
})