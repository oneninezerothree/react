import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'



ReactDOM.render(<div>
    {Header()}
    {Header()}
    {Header()}
    {Header()}
    {Header()}

    <Header name="微信"/>
    <Header/>
    <Header/>
    <Header name="支付宝"/>
    <Header/>
    <Footer name="yao"/>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
