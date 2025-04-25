import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import AppointmentCard from './AppointmentCard';

const AllApointments = () => {
    const { user } = useContext(authContext);
    const [locatStorage, setLocalStorage] = useState([]);

    useEffect(() => {
        let saveData = [];
        const locatData = localStorage.getItem('appointments');
        if (locatData) {
            saveData = JSON.parse(locatData);
        }

        const userData = saveData.filter(data => data.email === user?.email);

        setLocalStorage(userData);

    }, [user?.email])

    return (
        <div className='space-y-4 mt-6'>
            

            {
                locatStorage.map((data,index)=> <AppointmentCard key={index} data={data} index={index} />)     
            }

        </div>
    );
};

export default AllApointments;