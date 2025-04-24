import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../utilities/firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleProvider = new GoogleAuthProvider();

    const handleSignup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      

    const handleLogin=(email,passwrod)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passwrod);
    }

    const handleLogout=()=>{
        setLoading(true);
        signOut(auth);
    }

    const handleUserProfile=(name,image)=>{
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: image,
        })
    }

    const handleGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
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
            setLoading(false)
            
        })
        return ()=>{
            unsubscribe();
        }
    },[])



    const authInfo={
    
        handleSignup,
        handleLogin,
        handleLogout,
        handleGoogle,
        user,
        setUser,
        handleUserProfile,
        loading
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;