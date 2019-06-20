import React, { Component } from 'react'
// 做组件的处理
export default (HocComponent)=>{
    return class HOC extends Component {
        state = {
            skill: ['ps','js','css']
        }
        axios(){

        }
        render() {
            return (
                <HocComponent hoc={{
                    ...this.state.skill,
                }} axios={this.axios} />
            )
        }
    }
} 