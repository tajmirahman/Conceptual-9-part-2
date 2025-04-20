import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service';

const AllTreatments = () => {

    const services=useLoaderData();
    return (
        <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-3 w-[80%] mx-auto max-w-[1200px] mt-8'>
            {
                services.map(service=> <Service service={service}></Service>)
            }
        </div>
    );
};

export default AllTreatments;