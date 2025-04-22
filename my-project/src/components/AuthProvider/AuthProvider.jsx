import React, {  createContext } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import auth from '../../utilities/firebase.init';


export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    // const handleSignup=(email,passwrod)=>{
    //    return createUserWithEmailAndPassword(auth,email,passwrod);
    // }

    const name= 'utsob';

    const authInfo={
        name,
        // handleSignup
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default AuthProvider;