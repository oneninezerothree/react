import React from 'react'
import Child from '../Child/Child'
class LifeCycle extends React.Component {
    // 1.构造器 初始化有状态数据，获取props
    constructor(props){
        
        super(props)
        console.log('------------constructor----------------')
        console.log(this.state)
        // 数据
        this.state = {
            name: 'Jing',
            num: 0,
            text: '',
            bool: true
        }
        // 方法
        this.methods = {
            testClick(){
                console.log(1)
            }
        }
    }
    // 监听props的更改 16.3新增
    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log(nextProps, prevState)
    //     return {}
    // }
    // state = {
    //     name: 'Jing'
    // }
    // 你可以在这个地方同步更改数据
    componentWillMount(){
        console.log('------------componentWillMount----------------')
        console.log(this.state)
        // 同步改
        this.state.name = 'ABC'
    }
    render(){
        console.log('------------render----------------')
        console.log(this)
        return (
            <div>
                <input onChange={this.getInputValue.bind(this)} />
                <p>{this.state.text}</p>
                <button disabled>登陆</button>
                <header onClick={this.methods.testClick.bind(this)}>生命周期{this.state.num}</header>
                {/* v-if增加或者删除组件 */}
                {
                    this.state.bool?<Child name={this.state.num} />:''
                }
                <button onClick={
                    ()=>{
                        this.setState({
                            bool: !this.state.bool
                        })
                    }
                }>增加或者删除子组件</button>
            </div>
           
        )
    }
    // 操作DOM，ref来去操作，异步更改数据
    componentDidMount(){
        console.log('------------componentDidMount----------------')
        setInterval(()=>{
            this.setState({
                num: Math.random()
            })
        },1000)
    }
    getInputValue(e){
        this.setState({
            text: e.target.value
        })
    }
    shouldComponentUpdate(){
        if(this.state.text.length>8){
            return true
        }else{
            return false
        }
    }
    UNSAFE_componentWillUpdate(){
        console.log('------------UNSAFE_componentWillUpdate----------------')
    }
    // render
    // 获取render更新后最新镜像
    // getSnapshotBeforeUpdate(){

    // }
    componentDidUpdate(){
        console.log('------------componentDidUpdate----------------')
    }
    componentDidCatch(e){
        console.log(e)
    }
    
}
export default LifeCycle
// .vue scoped