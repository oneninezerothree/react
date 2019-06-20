import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header name="微信" />
                <SearchBar/>
                <Panel/>
                <Gallery/>
            </div>
        )
    }
}