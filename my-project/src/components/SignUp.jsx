import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';

const SignUp = () => {

    const { handleSignup } = useContext(authContext);




    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleSignup(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err.message))
    }


    return (
        <div className='bg-gray-200 mt-10 w-[300px] mx-auto '>
            <form onSubmit={handleForm} className='space-y-4 text-center  py-5'>
                <input type="text" name='name' placeholder='name' /><br />
                <input type="email" name='email' placeholder='email' /><br />
                <input type="password" name='password' /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;