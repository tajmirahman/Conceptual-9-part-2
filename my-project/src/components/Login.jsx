import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const Login = () => {

    const handleLogin=useContext(authContext);
    console.log(handleLogin)

    const handleForm=()=>{
        
    }

    return (
        <div className='bg-sky-600 w-[600px] h-[250px] mx-auto mt-10'>
            <form onSubmit={handleForm} className='space-y-4 text-center p-2'>
                
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <button type="submit" className='btn'>Login</button>
            </form>

        </div>
    );
};

export default Login;