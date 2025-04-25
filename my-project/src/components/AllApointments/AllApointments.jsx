import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

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
        console.log(userData);
        setLocalStorage(userData);

    }, [user?.email])

    return (
        <div>
            appontment

            {
                locatStorage.map(data=> 
                <div data={data}>
                    {console.log(data)}
                    <li>{data.fName}</li>
                </div>
                )
            }

        </div>
    );
};

export default AllApointments;