import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, sendEmailVerification } from "firebase/auth"
import { auth } from "../utils/firebase";
const Context = createContext({});

export const useAuth = () => useContext(Context);

export default function CustomContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        sessionStorage.clear();
        setUser(null);
        await signOut(auth);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signup = async (email, password, username) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: username });
            await sendEmailVerification(auth.currentUser);
        } catch (error) {
            console.log({ error });
            alert(error);
        }
    }

    return <Context.Provider value={{ user, login, logout, signup }}>
        {loading ? "Loading" : children}
    </Context.Provider>
}