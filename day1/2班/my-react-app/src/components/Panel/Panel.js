import React from 'react';
import axios from 'axios';
class Header extends React.Component {
    state = {
        news:[]
    }
    // :style
    render() {
        console.log(this)
        return (
            <div className="weui-panel weui-panel_access">
                <div className="weui-panel__bd">
                    {
                        this.state.news.map((item,index)=>{
                            return (
                                <a key={index} href="javascript:void(0);" className="weui-media-box weui-media-box_appmsg">
                                    <div className="weui-media-box__hd">
                                        <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                                    </div>
                                    <div className="weui-media-box__bd">
                                        <h4 className="weui-media-box__title">{item.title}</h4>
                                        <p className="weui-media-box__desc">{item.author?item.author.loginname:'无名'}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                    
                </div>
                <div className="weui-panel__ft">
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>    
                </div>
            </div>
        )
    }
    async componentWillMount(){
        const news = (await axios.get('https://cnodejs.org/api/v1/topics')).data.data
        console.log(news)
        this.setState({
            news
        })
    }
}
export default Header