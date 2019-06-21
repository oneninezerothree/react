import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
import Tabbar from '../../components/Tabbar/Tabbar';
export default class Job extends Component {
    render() {
        return (
            <div>
                <Header status={{
                    name: "求职",
                    template: null
                }} />
                <SearchBar/>
                <Panel tab="job" />
                <Gallery/>
                <Tabbar tab={2} html={
                    <div>123</div>
                } fn={()=>{
                    
                }}/>
            </div>
        )
    }
}