import React, { useState } from 'react'
// 函数组件在，无状态组件
// hook可以让你的函数无状态组件升级为有状态
export default () => {
    const [count, setCount] = useState(0);
    return <div>
        <p>你点击了{count}次</p>
        <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
}