// 虚拟DOM
import React from 'react';
// 真实DOM
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// JSX语法 -> 函数 -> 虚拟DOM对象(描述真实DOM解构)
// Model
const state = {
    title: 'Yao',
    obj:{
        name:'Jing',
        skill:['ps','js','css'],
        skill2:['11','22','33'],
        arr:[
            <li key='0'>ps</li>,
            <li key='1'>js</li>,
            <li key='2'>css</li>
        ]
    }
}

const methods = {
    vFor(arr){
        return <ul>
            {
                arr.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    },
    vIf(bool,jsx1,jsx2){
        return bool?jsx1:jsx2
    }
}

const template = <div>Hello World1</div>
// React构造虚拟DOM
const template2 = React.createElement('div',null,'Hello World2')
const template3 = React.createElement('div',null,'Hello World3')
const template4 = <div>
    <input />
    {0?template:template2}
</div>
console.log(template,template2,template3,template4)
// ReactDOM把虚拟DOM转为真实DOM，挂载到root的这个节点上
ReactDOM.render(<div>
    {state.title}
    <p id={state.title}>没有指令</p>
    <p>{state.obj.name}</p>
    {/* v-for */}
    <ul>
        {
            state.obj.arr
        }
    </ul>
    {methods.vFor(state.obj.skill)}
    {methods.vFor(state.obj.skill2)}
    {methods.vIf(0,
        <p>真的</p>,
        <p>假的</p>
    )}
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
