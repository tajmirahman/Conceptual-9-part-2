import React, {  createContext } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../utilities/firebase.init';


export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const handleSignup=(email,passwrod)=>{
       return createUserWithEmailAndPassword(auth,email,passwrod);
    }

    const handleLogin=(email,passwrod)=>{
        return signInWithEmailAndPassword(auth,email,passwrod);
    }

    const handleLogout=()=>{
        signOut(auth);
    }

    const hadleGoogle=()=>{
        signInWithPopup(auth, provider)
    }



    const authInfo={
    
        handleSignup,
        handleLogin,
        handleLogout,
        hadleGoogle
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;