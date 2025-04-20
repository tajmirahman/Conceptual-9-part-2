import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import Service from './Service';

const Home = () => {

    const services=useLoaderData();
    const {serviceData,feedbackData}=services

    return (
        <div>
            <Banner />

            <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-3 w-[80%] mx-auto max-w-[1200px] mt-8'>
                {
                    serviceData.slice(0,5).map(service=> <Service service={service}></Service>)
                }
            </div>

            <NavLink to={'/allTreatmens'}><button className='btn btn-primary mx-auto block'>Show More</button></NavLink>

        </div>
    );
};

export default Home;