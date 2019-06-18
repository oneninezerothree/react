import React from 'react';
import ReactDOM from 'react-dom';
import 'weui';
import './index.css';
// import App from './App';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Panel from './components/Panel/Panel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
    <Header name="微信" />
    <SearchBar/>
    <Panel/>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
