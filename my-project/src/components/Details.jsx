

import { Navigate, useLoaderData } from 'react-router-dom';
import Modal from './Modal';




const Details = () => {




    const { image, description, treatment } = useLoaderData();


    return (
        <div
            className="hero w-[80%] h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] mx-auto lg:max-w-[1200px] mt-8"
            style={{
                backgroundImage:
                    `url(${image})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5 text-center w-full">
                        {description}
                    </p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>


            <Modal treatment={treatment}></Modal>

        </div>




    );
};


export default Details;