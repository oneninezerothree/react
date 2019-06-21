import React from 'react'
import './Header.css'
class Header extends React.Component {
    render(){
        return (
            <header style={{
                position: 'fixed',
                top: 0,
                zIndex: 3,
                width: '100%'
            }}>{this.props.name}</header>
        )
    }
}
export default Header
// .vue scoped