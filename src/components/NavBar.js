import React, { useState } from 'react'
import logo from '../assets/logo1.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import DropDownMenu from '../components/DropDownMenu'

function NavBar() {

    const [menu,setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className="navbar" >
            <div className={menu ? "navbar-logo active1" : "navbar-logo"}>
                <img src={logo} alt="navbar-logo" className={menu ? "navbar-logo-img" : ""}/>
                <span className="navbar-logo-text">Governor DAO</span>
            </div>
            <ul className={menu ? 'navbar-ul active' : 'navbar-ul non-active'}>
                <DropDownMenu title={'Solutions'} item1={'GaaS'} item2={'UssS'} />
                <DropDownMenu title={'Farm'} />
                <DropDownMenu title={'Resources'} item1={'Docs'} item2={'Forum'}/>
                <DropDownMenu title={'Social'} item1={'Twitter'} item2={'Telegram'} item3={'Discord'}/>
            </ul>
            <AiOutlineMenu className={menu ? "burger-menu active2" : "burger-menu"} onClick={showMenu}/>
        </nav>
    )
}

export default NavBar;
