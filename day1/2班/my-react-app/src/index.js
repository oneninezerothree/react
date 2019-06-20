import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'weui'
// BrowserRouter简写为Router
// HashRouter 哈希路由 有#号
// BrowserRouter 浏览器路由 去#号
import { HashRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

// 公共组件
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Panel from './components/Panel/Panel';
import Pure from './components/Pure/Pure';
import Fn from './components/Fn/Fn';
import Hoc from './components/Hoc/Hoc';
import Gallery from './components/Gallery/Gallery';

// 路由组件

import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

// 从react-redux导出一个Provider组件，这个组件是用来在react激活redux使用的
import { Provider } from 'react-redux'
import store from './stores/store'
console.log(store)
// import LifeCycle from './components/LifeCycle/LifeCycle';
// ReactDOM.render(<App />, document.getElementById('root'));
const data = {
    title: 'Hello World123132',
    bool: !0,
    obj: {
        name: 'yao',
        arr: ['ps', 'js'],//v-for
        arr3: ['1', '2'],//v-for
        arr2: [
            <li key='0'>ps</li>,
            <li key='1'>js</li>
        ] //v-for
    },
    // v-if
}
const methods = {
    vFor(arr) {
        return <ul>
            {
                arr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    }
}
// 第二页
const template = <div>{data.title}</div>

const template2 = <div>12638216381732</div>
const template3 = <div>
    {data.bool ? template : template2}
    {data.obj.name}
    <ul>
        {data.obj.arr2}
    </ul>
    <hr />
    {/* v-for */}
    {methods.vFor(data.obj.arr)}
    {methods.vFor(data.obj.arr3)}

    {/* v-if */}
    <div>
        {
            1 ? <p>真的</p> : <p>假的</p>
        }
    </div>
</div>
console.log(template, template2, template3)
// 整个react的所有组件都有机会去顶级组件Provider里面使用仓库的值



ReactDOM.render(<Provider store={store}>
    <Router>
        {/* <Header title="支付宝" />
        <Search />
        <Panel />
        <Gallery /> */}
        {/* <LifeCycle /> */}
        {/* <Pure/> */}
        {/* <Fn/> */}
        {/* <Hoc/> */}
        {/* exact排除 /路由 */}
        {/* <Link to={{
            pathname: "/home",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true }
        }}>Home</Link>
        <Link to={{
            pathname: "/detail",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true }
        }}>detail</Link> */}
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/detail" component={Detail} />
        </Switch>
        <Redirect to="/home" />
    </Router>
</Provider>, document.getElementById('root'));

// ReactDOM.render(
//     React.createElement('div',null,'hello world'), 
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
