import React, { Component } from 'react'
import { connect } from 'dva';
export default connect((state) => {
    return state
})(class Header extends Component {
    render() {
        console.log(this)
        return (<div onClick={
            () => {
                this.props.dispatch({
                    type: 'students/save',
                    payload: {
                        age: 18
                    }
                })
            }

        }>头部组件</div>)
    }
})