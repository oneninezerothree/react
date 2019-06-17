import React from 'react';
// 外部可控，借助props来控制该组件的状态
// 自身无状态组件，组件是不可变的
const Header = (props)=>{
    console.log(props)
    const data = {
        title: 'Header'
    }
    return (
        <div>
            {data.title}{props?props.name:''}
        </div>
    )
}

export default Header