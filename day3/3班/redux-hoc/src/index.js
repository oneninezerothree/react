import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import HOC from './components/HOC'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './stores/store'
// console.log(store.getState())

// 改react应用绑定Redux仓库
ReactDOM.render(<Provider store={store}>
    <HOC/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
