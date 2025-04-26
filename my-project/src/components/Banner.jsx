import React, { useContext } from 'react';

import bannerImage from '../../src/assets/banner-jpg.jpg'
import Modal from './Modal';
import { authContext } from './AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const {user}=useContext(authContext);
    const navigate=useNavigate()

    const handleBookAppointments=()=>{

        if(user){
            document.getElementById('my_modal_5').showModal()
        }
        else{
            navigate('/login')
        }
    }



    return (
        <div className="hero bg-base-200 w-[80%] mx-auto max-w-[1200px] rounded-lg mt-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="w-[300px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button onClick={handleBookAppointments} className="btn btn-primary">Book Apointment</button>
                </div>
            </div>

            <Modal></Modal>

        </div>
    );
};

export default Banner;