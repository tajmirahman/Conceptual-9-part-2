import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../utilities/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        name: 'utsob',
        handleSignUp
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
