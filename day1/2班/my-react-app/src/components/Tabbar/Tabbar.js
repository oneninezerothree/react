import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
class Tabbar extends Component {        
    render() {
        return (
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }} className="weui-tabbar">
                {
                    this.props.tabbars.map((item, index) => {
                        return (
                            <Link key={index} to={{
                                pathname: item.url,
                                search: `?tab=${index}`,
                            }} className={
                                index===this.props.tab?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"
                            }>
                                <span style={{
                                    display: 'inline-block',
                                    position: 'relative'
                                }}>
                                    {/* 圆点加数字 */}
                                    <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                                    {
                                        item.badge > 0 ? (
                                            <span className="weui-badge" style={{
                                                position: 'absolute',
                                                top: '-2px',
                                                right: '-13px'
                                            }}>{item.badge}</span>
                                        ) : ''
                                    }
                                    {/* 圆点 */}
                                    {
                                        item.isBadge ? (<span className="weui-badge weui-badge_dot" style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: '-6px'
                                        }}></span>) : ''
                                    }
                                </span>
                                <p className="weui-tabbar__label">{item.title}</p>
                            </Link>
                        )
                    })
                }

            </div>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}
export default withRouter(connect((state)=>{
    return state
})(Tabbar))