import React, { useContext, useState } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { handleLogin } = useContext(authContext);




    const handleForm = (e) => {

        setError('');

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(() => {
                navigate(from, { replace: true });

            })
            .catch(err => {
                setError(err.message);
            })




    }

    return (
        <div className='bg-sky-600 w-[400px] md:w-[600px] md:h-[300px] mx-auto mt-10 p-3'>
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
            <div className=" text-red-700 w-[50%] mx-auto rounded-lg p-2 ">
                {
                    error && <p className='text-center bg-white w-[50%] mx-auto'>{error.split('/')[1].slice(0, 18)}</p>
                }
            </div>

        </div>
    );
};

export default Login;