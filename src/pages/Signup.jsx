import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { TailSpin } from "react-loader-spinner"
export default function Signup() {

    const [cred, setCred] = useState({
        email: "",
        password: "",
        username: ""
    });
    const [loading, setLoading] = useState(false);


    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleCred = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cred.email || !cred.password || !cred.username) { alert('please enter all the details'); return; }
        try {
            setLoading(true);
            await signup(cred.email, cred.password, cred.username);
            navigate('/');
        } catch (e) {
            setLoading(false);
            alert(e.message);
        }
    }
    return (
        <motion.section className="container" exit={{ opacity: 0 }}>
            <div className="bg_banner_container">
                <Navbar />
                <div className="signupscreen">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
                        <h2> Set up your account </h2>
                        <form className="signup__form" onChange={handleCred} onSubmit={handleSubmit}>
                            <input type="email" name="email" placeholder="Enter Email" />
                            <input type="text" name="username" placeholder="Enter Username" />
                            <input type="password" name="password" placeholder="Enter Password" />
                            <button type="submit" className="redBtn">
                                {loading ? <TailSpin color="white" height={30} ariaLabel="loading-indicator" /> : "Sign up"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            {/* <div>hi</div> */}
            {/* </div> */}
        </motion.section>
    )
}