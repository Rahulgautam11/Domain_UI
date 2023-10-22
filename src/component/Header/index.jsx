import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/Icon/logo.png'
import MobileMenu from './Mobilemenu'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState()
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const HandleMenuBar = () => {
        setMobileMenu(true)
    }
    return (
        <div className={"header_main"}>
            <figure className={"header_logo_main"}>
                <img className={"header_logo"} src={Logo} alt='logo' />
                {windowSize.width <= 800 ? "" : <figcaption className={"Caption_Logo"}>TechHub</figcaption>}
            </figure>
            {windowSize.width <= 800 ?
                <>
                    <div className={"menu_mobile"} onClick={HandleMenuBar}>
                        <div className={"menu_line"}></div>
                        <div className={"menu_line"}></div>
                        <div className={"menu_line"}></div>
                    </div>
                    {
                        mobileMenu &&
                        <MobileMenu setMobileMenu={setMobileMenu} />
                    }
                </>
                :
                <div className={"header_menu"}>
                    <Link className={"menu_link"} to='/'>HOME</Link>
                    <Link className={"menu_link"} to='/services'>SERVICES</Link>
                    <Link className={"menu_link"} to='/contact'>CONTACT</Link>
                </div>}
        </div>
    )
}

export default Header