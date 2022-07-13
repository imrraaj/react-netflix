import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../logo.png"
import Avatar from "../../avatar1.png"

function AppNavbar() {
    return (
        <nav className="nav">
            <div>
                <img
                    className='logo'
                    src={Logo}
                    alt="Netflix Logo" />
            </div>

            <Link to="/profile">
                <div>
                    <img
                        className="profile__logo"
                        src={Avatar}
                        alt="Avatar" />
                </div>
            </Link>
        </nav>
    )
}

export default AppNavbar;
