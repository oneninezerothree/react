import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// Route 嵌套在Router
// Link router-link
// Router router-view
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'weui';
import './index.css';
// import App from './App';
// import Header from './components/Header/Header';
// import SearchBar from './components/SearchBar/SearchBar';
// import Panel from './components/Panel/Panel';
// import Gallery from './components/Gallery/Gallery';
// import LifeCycle from './components/LifeCycle/LifeCycle';

// 路由组件
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

import store from './stores/stores'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={store}>
    <Router>
        {/* <Header name="微信" />
        <SearchBar/>
        <Panel/>
        <Gallery/> */}
        {/* <LifeCycle name="yao"/> */}
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
