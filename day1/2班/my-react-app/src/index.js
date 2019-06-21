import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'weui'
// BrowserRouter简写为Router
// HashRouter 哈希路由 有#号
// BrowserRouter 浏览器路由 去#号
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// 路由组件
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Ask from './pages/Ask/Ask'

// 从react-redux导出一个Provider组件，这个组件是用来在react激活redux使用的
import { Provider } from 'react-redux'
import store from './stores/store'



ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/detail" component={Detail} />
            <Route path="/ask" component={Ask} />
        </Switch>
        <Redirect to="/home" />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
