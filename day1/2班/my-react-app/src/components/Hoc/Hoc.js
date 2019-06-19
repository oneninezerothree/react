import React from 'react';
// 导出一个connect的方法，进行仓库的连接
import { connect } from 'react-redux'
import Child2 from '../Child2/Child2'
// redux
console.log(Child2)
class Hoc extends React.Component {
    state = {
        title: '微信'
    }
    render() {
        console.log(this)
        return (
            <div>
                Hoc
                {/* 高阶组件 */}
                {this.HOC(<Child2/>)}
                {/* <Child2/> */}
                {/* 插槽 */}
            </div>
        )
    }
    // 高阶函数，来二次处理组件，返回新的组件
    HOC(jsx){
        console.log(jsx)
        return (
            <div>
                {
                    jsx
                }
                <p>123</p>
            </div>
        ) 
    }
    componentDidMount(){
        console.log(this)
    }
}
// export default Hoc
// 获取仓库里面的state
// 把Hoc组件处理高阶组件，让它拥有读取数据库的能力
export default connect((state)=>{
    // 单独返回你需要的数据
    return {
        skill:state.skill
    }
})(Hoc)