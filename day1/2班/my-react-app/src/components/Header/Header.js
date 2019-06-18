import React from 'react';
// 无状态
const style = {
    height: '50px',
    width: '100%',
    textAlign: 'center',
    lineHeight: '50px',
    color: 'white',
    backgroundColor: 'red'
}
class Header extends React.Component {
    // 放在实例上面
    title = 'Yao'
    // setState
    // 唯一有状态的数据
    state = {
        title: '微信'
    }
    // 放在原型上面
    title2(){
        return 'Jing'
    }
    // :style
    render() {
        console.log(this)
        return (
            <header style={style}>{this.props?this.props.title:this.title2()}</header>
        )
    }
}
export default Header