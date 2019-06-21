import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Route 嵌套在Router
// Link router-link
// Router router-view
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";

import 'weui';
import './index.css';

// 路由组件
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Job from './pages/Job/Job'
import Child from './components/Child/Child'

import store from './stores/stores'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            {/* 动态路由 */}
            <Route exact path="/detail/:id" component={Detail} />)}
        </Switch>
        {/* 栏目的路由 */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/job" component={Job} />
        </Switch>
        {/* 嵌套路由 */}
        {/* <Route path="/detail/abc" component={Child} /> */}
        {/* <Redirect to="/" /> */}
    </Router>

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
