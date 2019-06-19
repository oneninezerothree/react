import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Child from '../Child/'
class HOC extends React.Component {
    render() {
        return (
            <div>
                HOC
                <button onClick={this.changeAuthor.bind(this)}>更改仓库的名字</button>
                <p>{this.props.author}</p>
                {/* 函数自执行 */}
                {
                    this.HOC(<Child />)
                }
                <Child />
            </div>
        )
    }
    // 高阶函数
    // 普通的组件 经过函数处理之后，变成了一个高阶组件
    // 可以让普通组件变成路由组件(高阶组件)
    // 可以让普通组件变成Vux可控的组件
    // 黑色盒子，你把组件扔进去，它会返回一个全新包装的组件(高阶组件)
    HOC(component) {
        return (
            <Fragment>
                <p>高阶组件</p>
                {component}
            </Fragment>
        )
    }
    changeAuthor() {
        this.props.dispatch({
            type: 'SETAUTHOR',
            name: 'Lin'
        })
    }
    componentDidMount() {
        console.log(this)
    }
}

export default connect((state) => {
    // getters
    return { author: state.author }
})(HOC)