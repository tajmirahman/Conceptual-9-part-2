import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../utilities/firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);

    const provider = new GoogleAuthProvider();

    const handleSignup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
      

    const handleLogin=(email,passwrod)=>{
        return signInWithEmailAndPassword(auth,email,passwrod);
    }

    const handleLogout=()=>{
        signOut(auth);
    }

    const hadleGoogle=()=>{
        signInWithPopup(auth, provider)
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])



    const authInfo={
    
        handleSignup,
        handleLogin,
        handleLogout,
        hadleGoogle,
        user,
        setUser
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;