import React from 'react'
import logo from '../assets/logo1.png'
import DropDownMenu from '../components/DropDownMenu'

function NavBar() {
    return (
        <nav className="navbar" >
            <div className="navbar-logo">
                <img src={logo} alt="navbar-logo" style={{
                    width: '100px'
                }}/>
                <span className="navbar-logo-text">Governor DAO</span>
            </div>
            <ul className="navbar-ul">
                <DropDownMenu title={'Solutions'} item1={'GaaS'} item2={'UssS'} />
                <DropDownMenu title={'Farm'} />
                <DropDownMenu title={'Resources'} item1={'Docs'} item2={'Forum'}/>
                <DropDownMenu title={'Social'} item1={'Twitter'} item2={'Telegram'} item3={'Discord'}/>
            </ul>
        </nav>
    )
}

export default NavBar
