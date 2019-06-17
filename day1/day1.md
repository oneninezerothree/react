# facebook/create-react-app

官方的react基于webpack脚手架，相当于vue-cli

全局安装create-react-app
```
$ npm install -g create-react-app
```
初始化第一个项目
创建一个项目
```
$ create-react-app your-app # 注意命名方式
```
```js
npx create-react-app my-app # 把安装和初始化目录的命令放在一起
```
默认用yarn安装，相当于npm，cnpm

启动项目
```
yarn start
```
## 文件夹目录
- node_modules 模块依赖
- public 公开文件资源
- src webpack的入口文件夹(开发环境编写代码的地方)
    - App.css 组件 App.vue(html,css,js)
    - App.js 组件
    - App.test.js 组件

    - index.css 全局样式
    - index.js 全局逻辑文件
    - logo.svg 静态文件
    - serviceWorker.js 去做pwa应用的文件
- .gitignore git提交的时候会忽略的文件
- build webpack的出口文件夹(生产环境发布代码的地方)
- package.json 项目描述，记录依赖，常用命令
- 

# dva

阿里出品的react脚手架，国内用得比较多

安装 dva-cli
通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。
```
$ npm install dva-cli -g
$ dva -v
dva-cli version 0.9.1
```

## 创建新应用
安装完 dva-cli 之后，就可以在命令行里访问到 dva 命令（不能访问？）。现在，你可以通过 dva new 创建新应用。
```
$ dva new dva-quickstart
```

# react VS vue

M <-> V
数据驱动视图，视图反馈数据(v-model,v-on:)
vue.js单文件就可以使用了 双向数据绑定{{}}
封装了很多很方便的指令v-model,v-text
> View <=> Template(Model)

M -> V
数据驱动视图，视图与数据无直接关系(只能通过事件回馈数据)
> View <= Render(Model)
react是没有指令的，换来是用函数式编程解决问题
react+react-dom == vue.js 单向数据绑定{}

react其实是负责虚拟DOM
react-dom负责操作真实DOM

# 最简单react程序

面向对象编程，vue更接近理解和开发
```js
new Vue({
    el:"#root",
    data:{
        title:'Hello World'
    },
    template:`
        <div>
            {{title}}
        </div>
    `
})

new Vue({
    el:"#root",
    render(createElement){
        return createElement('div',null,'hello world')
    }
})
```

`ReactDOM.render`react的渲染，函数式编程，它是更接近底层
```js
import React from 'react';
import ReactDOM from 'react-dom';
const data = {
    title:'Hello World'
}
ReactDOM.render(<div>
    {data.title}
</div>, document.getElementById('root'));

ReactDOM.render(<div>
    Hello World
</div>, document.getElementById('root'));

ReactDOM.render(React.createElement('div',null,'hello world111'), document.getElementById('root'));
```

# JSX

JS额外增加的语法，用JS对象描述DOM结构

前端

JSX经历这三步转化
```js
const template = <div>Hello World</div>
```
转为
```js
const template = React.createElement('div',null,'hello world'), 
```
转为虚拟DOM，用JS对象描述DOM解构
```js
const template = {
    $$typeof: Symbol(react.element)
    key: null
    props: {children: "12638216381732"}
    ref: null
    type: "div"
    _owner: null
}
```
- 支持三元表达式
- 支持直接渲染数组，直接代替v-for



# 组件

.vue单文件组件(html,css,js)

react的组件其实是分开写的

- 类组件
```js
class Header extends React.Component {
    render(){
        return (
            <div>头部组件</div>
        )
    }
}
ReactDOM.render(<div>
    <header/>
</div>, document.getElementById('root'));
```

- 函数式组件

使用props来实现父子通信
```js
const Footer = (props)=>{
    return (
        <div>{props.title}</div>
    )
}
ReactDOM.render(<div>
    {Footer()}
    <Footer name="底部组件" />
</div>, document.getElementById('root'));
```
# props

组件接受到的外部数据

# state

state是自身初始化的数据，有状态(可变)，无状态(不变)
组件有状态，必须把数据放到state里面，如果是没状态的数据，可以把它放到类外面，props

state和props的区别，state是组件的可变有状态的数据，props是组件从外部接受的数据

有状态组件和无状态组件的区别
```js
const data = {}
class Search extends React.Component {
    state = {
        bool:0
    }
}
```
cs
如果你要从View层更新Model层，必须调用`this.setState()`
```js
this.setState({
    bool:!this.state.bool
})
```

你要把V的变动更新到M里面并且反馈给V的话，必须手动触发
```js
this.setState({
    name: ''
})
```

# 事件

```
第三字母大写
onchange->onChange
onclick->onClick
onmousedown->onMousedown
```
一般需要在后面用bind来获取组件this，配合bind来获取参数
```js
<button onClick={this.toggle.bind(this,123,'asdasdasd')}>
```

