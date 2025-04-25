import React from 'react';

const AppointmentCard = ({ data, index }) => {
   
    const { address, date, email, fName, lName, phone } = data;


    return (
        <div className="card card-dash bg-base-100 w-[50%] mx-auto border-2 border-sky-600 ">
            <div className="card-body text-center">
            <h2 className='text-xl font-bold'>Appointment #{index + 1}</h2>
                <h2 className='text-xl'><span className=' font-bold'>Name</span>- {fName} {lName}</h2>
                <p className='text-xl'><span className=' font-bold'>Email</span>- {email}</p>
                <p className='text-xl'><span className=' font-bold'>Phone</span>- {phone}</p>
                <p className='text-xl'><span className=' font-bold'>Date</span>- {date}</p>
                <p className='text-xl'><span className=' font-bold'>Address</span>- {address}</p>
            
            </div>
        </div>
    );
};

export default AppointmentCard;