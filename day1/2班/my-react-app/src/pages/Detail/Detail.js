import React, {Component} from 'react'
import Header from '../../components/Header/Header';
export default class Detail extends Component {
    render(){
        return (
            <div>
                <Header status={{
                    back: true,
                    template:<div className="rightIcon">2123123213</div>,
                    fn(){
                        window.history.go(-1)
                    }
                }} title="详情页" />
            </div>
        )
    }
}