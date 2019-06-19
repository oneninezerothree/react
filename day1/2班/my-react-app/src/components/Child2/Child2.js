import React from 'react';
class Child2 extends React.Component {
    state = {
        title: '微信'
    }
    render() {
        console.log(this)
        return (
            <div>Child2</div>
        )
    }
}
export default Child2