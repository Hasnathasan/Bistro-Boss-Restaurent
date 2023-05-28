import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUpWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(error => console.log(error.message))
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
                setUser(loggedUser)
                setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    },[])
    const info = {
        user,
        loading,
        loginWithEmail,
        signUpWithEmail,
        logOut
    }
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;