import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Home = () => {

    const services=useLoaderData();
    console.log(services);

    return (
        <div>
            <Banner />

            <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-3 px-10 mt-8'>
                {
                    services.map(service=> <Service service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Home;