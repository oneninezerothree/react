import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
import Tabbar from '../../components/Tabbar/Tabbar';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header status={{
                    name: "分享",
                    template: null
                }}  />
                <SearchBar/>
                <Panel tab="share" />
                <Gallery/>
                <Tabbar tab={0} />
            </div>
        )
    }
}