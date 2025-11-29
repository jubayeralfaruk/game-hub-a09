import React, {  createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updataData) => {
        return updateProfile(auth.currentUser, updataData)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const provider = new GoogleAuthProvider();

    const googleSingIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        
        return ()=>{unsubscribe()}
    })


    const logout = ()=>{
        return signOut(auth)
    }
    const authData = {
        user,
        setUser,
        email,
        setEmail,
        createUser,
        signIn,
        logout,
        loading,
        setLoading,
        updateUser,
        resetPassword,
        googleSingIn,
    }
    return <AuthContext.Provider value={authData}>{ children }</AuthContext.Provider>
};

export default AuthProvider;


// {
//         name: "Hablu Mia",
//         email: 'hablu@mia.com'
//     }