import React from 'react';
// 无状态数据 写死 永远不会变化的
const data = {
    title: 'Footer123'
}
class Footer extends React.Component {
    // 有状态数据负责动态操作 是会变化，负责更改视图层的
    // M
    state = {
        text: 'Footer456',
        age: 19
    }
    setText(){
        console.log('触发了事件', this)
        // 通知M更新，再更新V
        this.setState({
            text: 'jasldjsal',
            age: 20
        })
        // this.text = 'jasldjsal';
        // this.age = 20
        
        // this.state.text = 'jasldjsal'
    }
    // V
    render() {
        console.log(this)
        return (
            <div>
                <p>1.无状态数据</p>
                {data.title}
                <hr />
                <p>2.有状态数据</p>
                {this.state.text}
                <button onClick={this.setText.bind(this)}>更改状态</button>
            </div>
        )
    }
}
export default Footer;