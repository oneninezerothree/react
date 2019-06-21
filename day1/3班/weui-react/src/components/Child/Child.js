import React from 'react'
class Child extends React.Component {
    render(){
        return (
            <header>子组件</header>
        )
    }
    // 旧版本
    componentWillReceiveProps(props){
        console.log('------------componentWillReceiveProps----------------')
        console.log(props)
    }
    componentWillUnmount(){
        // console.log(this.refs.abc.abc)
        // console.log('componentWillUnmountcomponentWillUnmountcomponentWillUnmountcomponentWillUnmountcomponentWillUnmount')
    }
    
}
export default Child
// .vue scoped