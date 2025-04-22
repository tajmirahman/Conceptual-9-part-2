import React from 'react';

const Register = () => {
    return (
        <div className='bg-gray-200 mt-10 text-center'>
            <form >
                <input type="text" name='name' placeholder='name' />
                <input type="email" name="email" placeholder='email'  />
                <input type="password" name="password" placeholder='password'  />
            </form>
        </div>
    );
};

export default Register;