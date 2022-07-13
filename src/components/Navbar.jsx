import { motion } from 'framer-motion';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../logo.png"


function Navbar() {

    const location = useLocation();
    const path = location.pathname === '/login' ? "/signup" : "/login"
    return (
        <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="nav">
            <div>
                <img
                    className='logo'
                    src={Logo}
                    alt="Netflix Logo" />
            </div>

            <Link to={path} className="redBtn">
                {path === '/signup' ? "Sign In" : "Log In"}
            </Link>
        </motion.nav>
    )
}

export default Navbar
