import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Panel from '../../components/Panel/Panel';
import Gallery from '../../components/Gallery/Gallery';
import Tabbar from '../../components/Tabbar/Tabbar';
export default connect((state)=>{
    return state
})(class Ask extends Component {
    state = {
        title: '',
        tab: 1
    }
    render(){
        return (
            <div>
                <Header title={this.state.title} />
                <Search />
                <Panel tab={this.state.tab} />
                <Gallery />
                <Tabbar tab={this.state.tab} />
            </div>
        )
    }
    componentDidMount(){
        const pathname =this.props.location.pathname
        const pathInfo = this.props.tabbars.filter((item)=>{
            if(item.url===pathname){
                return item
            }
        })
        this.setState({title:pathInfo[0].title})
    }
})