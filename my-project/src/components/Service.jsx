import React from 'react';

const Service = ({service}) => {

    const {cost,description,image,treatment}=service;

    return (
        <div className="card card-compact bg-base-200 ">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{treatment}</h2>
                <p title={description}>{description.slice(0,150)}...</p>
                <p className='font-bold'>Price- {cost}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;