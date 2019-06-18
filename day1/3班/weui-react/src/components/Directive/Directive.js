import React from 'react'
const template = <p>panel1</p>
const template2 = React.createElement('p', null, 'panel2')

class Panel extends React.Component {
    state = {
        name: 'yao',
        style:{
            color: 'red',
            fontSize: '23px'
        },
        bool:!0
    }
    render() {
        return <div>
            <div style={{
                color: 'blue'
            }}>1.v-if</div>
            <div>{!0?template:template2}</div>
            <div style={{
                color: 'blue'
            }}>2.v-bind:xxx</div>
            {/* :name */}
            <div name={this.state.name}>属性指令</div>
            {/* :style */}
            <div style={this.state.style}>style指令</div>
            <div style={{
                color: 'red',
                fontSize: '23px'
            }}>style指令</div>
            {/* :class */}
            <div className={!0?this.state.name:'abc'}>class指令</div>
            <div style={{
                color: 'blue'
            }}>3.v-show</div>
            <div style={{
                display:this.state.bool?'block':'none'
            }}>显示或者隐藏</div>
            <div style={{
                color: 'blue'
            }}>4.v-on:xxx</div>
            <button onClick={
                ()=>{
                    this.setState({
                        bool: !this.state.bool
                    })
                }
            }>切换状态</button>
            <div style={{
                color: 'blue'
            }}>5.v-for</div>
            <ul>
                {
                    (()=>{
                        // 无状态
                        const arr = ['ps','js','css'];
                        return arr.map((item,index)=>{
                            return <li key="index">{item}</li>
                        })
                    })()
                }
            </ul>
            <div style={{
                color: 'blue'
            }}>6.v-html</div>
            <div dangerouslySetInnerHTML={{__html: `
                <p>
                    123
                    <span style="color:red">456</span>
                    789
                </p>
            `}}></div>
            <div style={{
                color: 'blue'
            }}>7.v-text</div>
            <p>{this.state.name}</p>
        </div>
    }
}
export default Panel
// .vue scoped