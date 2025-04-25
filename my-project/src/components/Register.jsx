import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../utilities/firebase.init';

const Register = () => {

    const [uesr, setUser]=useState(null);

    const handleSignup=(e)=>{
            e.preventDefault();
            const name=e.target.name.value;
            const email=e.target.email.value;
            const password=e.target.password.value;

            setUser(name,email, password)

            createUserWithEmailAndPassword(auth,email,password)
            .then((currentuser)=>{
                
                console.log(currentuser.uesr)

            })
            
    }

    return (
        <div className='bg-gray-200 mt-10 text-center'>
            <form onSubmit={handleSignup} className='space-y-3'>
                <input type="text" name='name' placeholder='name' /><br />
                <input type="email" name="email" placeholder='email'  /><br />
                <input type="password" name="password" placeholder='password'  /><br />
                <input type="submit" className='btn btn-warning' />
            </form>
        </div>
    );
};

export default Register;