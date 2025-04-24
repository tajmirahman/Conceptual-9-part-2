import React, { useContext, useState } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

    const { handleSignup } = useContext(authContext);
    const [error, setError] = useState('');

    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        if (password != conPassword) {
            // setError({ ...error, name: 'password does not match!' })// (when we do set useState object that time use this type of vlaidation)
            
            setError('password does not match!') //(when useState use string that time use this type of validation)
            return;
        }

        if (name.length < 5) {
            // setError({ ...error, name: 'please write at least 5 character' })
            setError('please write at least 5 character')
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

        if (!passwordRegex.test(password)) {
            setError('plese write password!')
            return;
        }


        handleSignup(email, password)
    
    };




    return (
        <div className='bg-sky-600 w-[600px]  mx-auto mt-5 p-3'>

            <h1 className='text-center text-2xl text-white mt-6'>Signup Your Account</h1>

            <form onSubmit={handleForm} className='space-y-4 text-center p-2'>
                <div className='mt-4 '>
                    <input type="text" name="name" className='w-[70%] text-center' placeholder="Your Name" />
                </div>
                <div>
                    <input type="email" name="email" className='w-[70%]  text-center' placeholder="Your Email" required />
                </div>
                <div>
                    <input type="text" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                <div>
                    <input type="text" name="conPassword" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
                {
                    error && <p className="bg-white text-red-700 w-[50%] mx-auto rounded-lg p-2 " >{error}</p>
                }
               

                <button type="submit" className='btn'>Sign Up</button>
                <p className='text-white'>If you have already an account? please <NavLink to={'/login'}><span className='text-yellow-500 underline'>login</span></NavLink></p>
                <hr />
                <h1 className='text-white'>Or Sign up with</h1>
                <div>
                    <button className='btn'>with google</button>
                </div><div>
                    <button className='btn'>with github</button>
                </div>
            </form>

        </div>
    );
};

export default SignUp;