import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signupWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser = {
                setUser(loggedUser)
        })
    },[])
    const info = {
        user,
        loading,
        loginWithEmail,
        signupWithEmail
    }
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;