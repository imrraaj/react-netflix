import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/authContext"
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"
import { Triangle, TailSpin } from "react-loader-spinner"


function Login() {

    const [cred, setCred] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);


    const { login } = useAuth();
    const navigate = useNavigate();

    const handleCred = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cred.email || !cred.password) {
            alert("Please provide email and password!!");
            return;
        }
        try {
            setLoading(true);
            await login(cred.email, cred.password),
                navigate('/', { replace: true });
        } catch (e) {
            alert(e);
            setLoading(false);
            console.log(e);
        }
    }

    return (
        <motion.div exit={{ opacity: 0 }}>
            <section className="container">
                <div className="bg_banner_container">
                    <Navbar />
                    <div className="loginscreen__body">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime</h2>
                            <span>Ready to watch? Enter your email to create or restart your membership.</span>
                            <form className="loginForm" onChange={handleCred} onSubmit={handleSubmit}>
                                <input type="email" name="email" placeholder="name@example.com" />
                                <input type="password" name="password" placeholder="*********" />
                                <button type="submit" className="redBtn">
                                    {loading ? <TailSpin color="white" height={30} ariaLabel="loading-indicator" /> : "Get Started"}
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>
        </motion.div>

    )
}

export default Login
