import React, { useEffect } from 'react';
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])


    return <>{user ? children : null}</>
}


export default ProtectedRoute;