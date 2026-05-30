import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
           
            {/* ***** Header Area Start ***** */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <Link to="/" className="logo">
                                    <img src="assets/images/logo.png" />
                                </Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About Us</NavLink></li>
                                    <li><NavLink to="/shop">Products</NavLink></li>
                                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                                   
                                    <li className="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><a href="#">Features Page 1</a></li>
                                            <li><a href="#">Features Page 2</a></li>
                                            <li><a href="#">Features Page 3</a></li>
                                            <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                        </ul>
                                    </li>
                                   
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}
        </div>

    )
}

export default Header