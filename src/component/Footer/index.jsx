import React from 'react'
import './Style.scss'
import Logo from '../../Assets/Icon/logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"Footer_container"}>
                <div className={"footer_wrap"}>
                    <div className={"Logo_Footer_wrap"}>
                        <div className={"logoWrapper"}>
                            <Link to="/" >
                                <img className={"logo"} src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minima nam quibusdam pariatur eveniet minus molestiae, neque consequatur! Cupiditate accusantium eaque magni sequi tempora perferendis illo vero quia exercitationem
                        </p>
                    </div>
                    <div className={"menu_wrap"}>
                        <h6>Menu Links</h6>
                        <ul className={"FooterMenuItemList"}>
                            <li className={"footerMenuItem"}>
                                <Link to="/">HOME</Link>
                            </li>

                            <li className={"footerMenuItem"}>
                                <Link to="/services" >SERVICES</Link>
                            </li>
                            <li className={"footerMenuItem"} >
                                <Link to="/contact" >Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"location_warp"}>
                        <h6>Location</h6>
                        <ul className={"FooterMenuItemList"}>
                            <li className={"footerMenuItem"}>
                                <b>India &nbsp; :&nbsp;  </b> 901 sector-53, Noida, Uttar Pradesh 201301
                            </li>
                            <li className={"footerMenuItem"}>
                                <b>USA &nbsp; :&nbsp;  </b> 9009 South Plaza, Unit 199 Texas sector-53
                            </li>
                        </ul>
                    </div>
                    <div className={"contact_wrap"}>
                        <h6>Call us</h6>
                        <ul className={"FooterMenuItemList"}>
                            <li className={"footerMenuItem"}>
                                <a href="tel:99" target="_blank" rel="noreferrer">+91-739823xxxx</a>
                            </li>
                            <li className={"footerMenuItem"}>
                                <a href="tel:99" target="_blank" rel="noreferrer">+91-739823xxxx</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className=''>
                        <div className={"divider"}></div>
                        <ul className={"footerHighlights"}>
                            <li className={"footerTermsCondition"}>
                                <p > <Link to={'/'}>Terms of Service</Link> </p>
                                <p > <Link to={'/'}>Privacy Policy</Link> </p>
                            </li>
                            <li>
                                <p className={"copyRightText"}>Copyright@2023 TechHub. All rights reserved</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer