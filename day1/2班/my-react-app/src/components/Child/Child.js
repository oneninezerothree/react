import React from 'react';
class Child extends React.Component {
    state = {}
    render() {
        return (
            <div style={{
                border: '1px solid red'
            }}>子组件{this.props.name}</div>
        )
    }
    // 获取新的props时候会被调用
    // static getDerivedStateFromProps(props) {
    //     console.log('-----------getDerivedStateFromProps-------------')
    //     console.log(props)
    //     return {}
    // }
    componentWillReceiveProps(props){
        console.log('-----------componentWillReceiveProps-------------')
    }
    componentWillUnmount(){
        console.log(this.refs.abc.abc)
        console.log('-----------componentWillUnmount-------------')
    }
}
export default Child