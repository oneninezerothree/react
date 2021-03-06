import React, {Component} from 'react'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
import Tabbar from '../../components/Tabbar/Tabbar';
export default class Home extends Component {
    state = {
        tab: 0
    }
    render(){
        return (
            <div>
                <Header title="CNode" />
                <Search />
                <Panel tab={this.state.tab} />
                <Gallery />
                <Tabbar tab={this.state.tab} />
            </div>
        )
    }
}