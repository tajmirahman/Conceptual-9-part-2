import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const SignUp = () => {

    const { handleSignup } = useContext(authContext);

    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Email:", email); // ✅ check this prints a valid email

        handleSignup(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err.message));
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
                    <input type="password" name="password" className='w-[70%] text-center' placeholder="Your Password" required />
                </div>
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