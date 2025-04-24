import React, { useContext, useState } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { Navigate, NavLink } from 'react-router-dom';

const Login = () => {

    const [error,setError]=useState('');

    const {handleLogin,user}=useContext(authContext);

    if(user){
        return <Navigate to={'/'}></Navigate>
    }


    const handleForm=(e)=>{

        setError('');
        
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        handleLogin(email,password)
        .then(()=>{})
        .catch(err=>{
            setError(err.message);
        })

        
        
        
    }

    return (
        <div className='bg-sky-600 w-[600px]  mx-auto mt-10 p-3'>
            <h1 className='text-center text-2xl text-white my-6'>Signup Your Account</h1>

            <form onSubmit={handleForm} className='space-y-4 text-center p-2'>
                
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <button type="submit" className='btn'>Login</button>
                <p className='text-white'>if you have do not create an account? please <NavLink to={'/signup'}><span className='text-yellow-500 underline'>register</span></NavLink></p>
            </form>

            {
                    error && <p className="bg-white text-red-700 w-[50%] mx-auto rounded-lg p-2 " >{error.split('/')[1].slice(0,18)}</p>
                }

        </div>
    );
};

export default Login;