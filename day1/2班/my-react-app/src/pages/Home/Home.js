import React, {Component} from 'react'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
export default class Home extends Component {
    render(){
        return (
            <div>
                <Header title="支付宝" />
                <Search />
                <Panel />
                <Gallery />
            </div>
        )
    }
}