import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    const handleUserProfile=(name,image)=>{
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: image,
        })
    }

    const hadleGoogle=()=>{
        signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        console.log(user);
    },[user])


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
          
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }
            
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
        setUser,
        handleUserProfile
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;