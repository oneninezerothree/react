import React from 'react'
import { Link } from 'react-router-dom'
class Tabbar extends React.Component {
    state = {
        // badge: <0 啥都不出，即不显示圆点，也不显示数字
        // badge: 0 出圆点 不出数字
        // badge: >0 出数字
        tabs: [{
            title: '分享',
            name: 'share',
            url: '/',
            badge: 8
        }, {
            title: '提问',
            name: 'ask',
            url: '/ask',
            badge: -1
        }, {
            title: '求职',
            name: 'job',
            url: '/job',
            badge: 0
        }, {
            title: '点赞',
            name: 'good',
            url: '/good',
            badge: -1
        }]
    }
    render() {
        return (
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }} className="weui-tabbar">
                {
                    this.state.tabs.filter((item) => {
                        // if (item.badge >= 0) {
                        //     return item
                        // }
                        return item
                    }).map((item, index) => {
                        return (
                            <Link key={index} to={{
                                pathname: item.url,
                            }} className={
                                index===this.props.tab?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"
                            }>
                                <span style={{
                                    display: 'inline-block',
                                    position: 'relative'
                                }}>
                                    <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                                    {/* 圆点加数字 */}
                                    {
                                        item.badge > 0 ? (<span className="weui-badge" style={{
                                            position: 'absolute',
                                            top: '-2px',
                                            right: '-13px'
                                        }}
                                        >{item.badge}</span>) : ''
                                    }

                                    {/* 圆点 */}
                                    {
                                        item.badge === 0 ? (<span className="weui-badge weui-badge_dot" style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: '-6px'
                                        }}
                                        ></span>) : ''
                                    }
                                </span>
                                <p className="weui-tabbar__label">{item.title}</p>
                                {this.props.html}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
export default Tabbar