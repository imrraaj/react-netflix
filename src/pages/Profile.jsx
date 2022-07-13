import React, { useState } from 'react'
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/authContext';
import avatar from "../../avatar1.png"
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';


function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }} exit={{ opacity: 0, x: 0, transition: { duration: 2 } }}>

            <ProtectedRoute>
                <div className="profile">
                    <div className="profile__container">

                        <h1 className="profile__title">Edit Profile</h1>
                        <div className="profile__flex">

                            <div className="profile__left">
                                <img className="profile__avatar" src={avatar} alt="  " />
                            </div>


                            <div className="profile__right">
                                <input type="text" value={user?.displayName || user?.email} readOnly />
                                <div className="profile__plans">
                                    <p>available Plans </p>
                                    <div>
                                        <p>
                                            Renewal Date:
                                        </p>
                                    </div>


                                    <div className="plans">
                                        <div className="planName">
                                            <p>
                                                Standard (480p)
                                        </p>
                                            <button className="btn">Subscribe</button>
                                        </div>
                                        <div className="planName">
                                            <p>
                                                Basic (720p)
                                        </p>
                                            <button className="btn">Subscribe</button>
                                        </div>
                                        <div className="planName">
                                            <p>
                                                Premium (1080p)
                                </p>
                                            <button className="btn current__plan">Current Package</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn" onClick={() => {
                                    navigate('/login', { replace: false });
                                    logout();
                                }}>Logout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </ProtectedRoute>
        </motion.div>
    )
}

export default React.memo(Profile);

