import React from 'react'
import './Header.css'
class Header extends React.Component {
    render(){
        // console.log(this.props.status.name)
        return (
            <header style={{
                position: 'fixed',
                top: 0,
                zIndex: 3,
                width: '100%'
            }}>
                {/* 有标题出标题 */}
                {
                    this.props.status&&this.props.status.name
                }
                {/* 有模板出模板 */}
                {
                    this.props.status&&this.props.status.template
                }
            </header>
        )
    }
}
export default Header
// .vue scoped