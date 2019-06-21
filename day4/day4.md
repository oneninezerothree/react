# react-router

- [router5.0官方文档](https://reacttraining.com/react-router/web/guides/quick-start)

# 安装

在脚手架所在的目录下打开命令行安装一下指令
```js
npm install react-router-dom
```

# 使用

在`src/index.js`引入以下模块,新建一个`pages`文件夹存放路由组件，路由装载着公有组件进场
```jsx
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/detail" component={Detail} />
        </Switch>
        <Redirect to="/home" />
    </Router>
, document.getElementById('root'));
```

|组件|用法|
|-|-|
|BrowserRouter|浏览器路由 url上去#/|
|HashRouter|哈希路由 url上留#|
|Route|Router子项，定义路由跳转的规则，一般是放在Router里面，也可以放在Switch里面,如果是/的话，建议加上exact|
|Switch|统筹Route组件|
|Redirect|默认路由重定向|
|Link|声明式导航，也相当于`<a>`标签|
|withRouter|让普通升级高阶组件，并在对应的`props`绑定了location，history，可以利用这些属性实现编程式导航|