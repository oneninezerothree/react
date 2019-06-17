import React from 'react';
import './Header.css';


class Header extends React.Component {
    render(){
        console.log(this)
        return (
            <header className='header'>{this.props.name}</header>
        )
    }
}

export default Header
