import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
class Gallery extends React.Component {
    render() {
        console.log(this)
        return (
            <div className="weui-gallery" style={{
                display: this.props.isShowGallery ? 'block' : 'none'
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
    hideGallery() {
        this.props.dispatch({
            type: "TOGGLEGALLERY",
            isShowGallery: false,
            imgUrl:''
        })
    }
}
export default withRouter(connect((state) => {
    return state
})(Gallery))