import React from 'react';
import Child from '../Child/Child'
class LifeCycle extends React.Component {
    // 构造器 初始化数据，继承父组件的数据
    constructor(props) {
        console.log('-----------constructor-------------')
        super(props)
        console.log(props)
        this.state = {
            title: '123',
            name: 'yao',
            bool: true
        }
    }

    // 挂载前 同步修改值的地方
    componentWillMount() {
        console.log('-----------componentWillMount-------------')
        // setState
        // 同步修改
        this.state.name = 'Jing'
        // 异步更改
        setTimeout(() => {
            this.setState({
                name: 'Lemon',
            })
        }, 1000)


    }
    // JSX快照
    render() {
        console.log('-----------render-------------')
        console.log(this)
        return (
            <div style={{
                border: '1px solid blue',
                padding: '20px'
            }} onClick={
                this.testClick
            }>
                父组件{this.state.name}
                {
                    this.state.bool?<Child name={this.state.name} />:''
                }
                <button onClick={
                    ()=>{
                        this.setState({
                            bool: !this.state.bool
                        })
                    }
                }>删除或者新增子组件</button>
                <input onChange={
                    (e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }
                } />
            </div>
        )
    }
    // DOM解构趋向于稳定的时候，再发ajax请求
    // ajax放在这个地方
    componentDidMount() {
        console.log('-----------componentDidMount-------------')
    }
    UNSAFE_componentWillUpdate(){
        console.log('-----------UNSAFE_componentWillUpdate-------------')
    }
    shouldComponentUpdate(){
        if(this.state.name.length>8){
            return true    
        }else{
            return false
        }
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('-----------getSnapshotBeforeUpdate-------------')
    // }
    // render
    componentDidUpdate(){
        console.log('-----------componentDidUpdate-------------')
    }
    // 监听错误
    componentDidCatch(err){
        console.log(err)
    }
    testClick() {
        console.log(1)
    }
    // 唯一有状态的数据
    // state = {
    //     title: '微信'
    // }
    // :style

}
export default LifeCycle