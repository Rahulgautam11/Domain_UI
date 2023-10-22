import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const MobileMenu = ({ setMobileMenu }) => {

    return (
        <div className={"Mobile_menu_main"}>
            <i className={"cross_icon"} onClick={() => setMobileMenu(false)} />
            <div className={"menu_link_wrap"}>
                <Link className={"menu_link_mobile"} to='/' onClick={() => setMobileMenu(false)}>HOME</Link>
            </div>
            <div className={"menu_link_wrap"}>
                <Link className={"menu_link_mobile"} to='/services' onClick={() => setMobileMenu(false)}>SERVICES</Link>
            </div>
            <div className={"menu_link_wrap"}>
                <Link className={"menu_link_mobile"} to='/contact' onClick={() => setMobileMenu(false)}>CONTACT</Link>
            </div>
        </div>
    )
}

export default MobileMenu