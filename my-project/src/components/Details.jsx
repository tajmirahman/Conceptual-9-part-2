
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Details = () => {

    const { cost, image, description,name } = useLoaderData();


    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Details;