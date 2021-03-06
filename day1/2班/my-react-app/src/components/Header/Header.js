import React from 'react';
import { withRouter } from "react-router-dom";
// 无状态
// const style = {
//     height: '50px',
//     width: '100%',
//     textAlign: 'center',
//     lineHeight: '50px',
//     color: 'white',
//     backgroundColor: '#58bc58',
//     position: 'fixed',
//     top: 0,
//     zIndex: 3
// }
import './Header.scss';
import leftIcon from '../../images/back.png'
class Header extends React.Component {
    // 放在实例上面
    title = 'Yao'
    // setState
    // 唯一有状态的数据
    state = {
        title: '微信'
    }
    // 放在原型上面
    title2() {
        return 'Jing'
    }
    // :style
    render() {
        console.log(this)
        return (
            <header className="header">
                {
                    this.props.status && this.props.status.back && (
                        <div onClick={
                            this.props.status.fn
                        } className="leftIcon">
                            <img src={leftIcon} />
                        </div>
                    )
                }

                <div onClick={
                    () => {
                        this.props.history.push('/detail?name=yao')
                    }
                } className="title">{this.props ? this.props.title : this.title2()}</div>
                {this.props.status && this.props.status.template}
            </header>
        )
    }
    componentDidMount() {
        // console.log(this.props.status.back)
    }
}
// 编程式导航
export default withRouter(Header)