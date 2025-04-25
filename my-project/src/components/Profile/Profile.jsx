import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(authContext);
    console.log(user);

    return (
        <div className='w-[50%] mx-auto mt-6'>
            <div >
                <p className='text-2xl'>Hellow <span className='text-yellow-600 font-bold'>{user?.displayName}</span>. This is your profile.</p>
            </div>
            <div className='mt-6 space-y-3'>
                <div className='border-2 border-red-100 w-[200px]'>

                <img  src={user?.photoURL} alt="" />
                </div>
                <h1 className='text-xl font-semibold'>Name- {user?.displayName}</h1>
                <h1 className='text-xl font-semibold'>Name- {user?.email}</h1>
            </div>
        </div>
    );
};

export default Profile;