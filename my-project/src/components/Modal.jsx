
import React, { useContext } from 'react';
import { authContext } from './AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Modal = () => {

    const {user}=useContext(authContext);
    const navigate=useNavigate();

    const handleForm=(e)=>{
        e.preventDefault();

        // console.log(e);


        const  fName=e.target.fname.value;
        const  lName=e.target.lname.value;
        const email=e.target.email.value;
        const phone=e.target.number.value;
        const date=e.target.date.value;
        const address=e.target.address.value;

        const info={
            fName,lName,email,phone,date,address
        }

        // local storage get item

        let saveData=[];
        const loadData=localStorage.getItem('appointments');
        if(loadData){
            saveData= JSON.parse(loadData);
        }
        saveData.push(info);
        localStorage.setItem('appointments',JSON.stringify(saveData));
    
        navigate('/allApointments')

    }

    return (


        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">

                <form onSubmit={handleForm}>
                 
                        <fieldset className="fieldset">
                            First Name
                            <input type="text" name='fname' className="input" placeholder="Type here" />
                        </fieldset>
                  
                        <fieldset className="fieldset">
                            Last Name
                            <input type="text" name='lname' className="input" placeholder="Type here" />
                        </fieldset>
                   
                        <fieldset className="fieldset">
                            Email
                            <input type="text" name='email' className="input" placeholder="Type here" value={user?.email} />
                        </fieldset>
                   
                        <fieldset className="fieldset">
                            Phone Number
                            <input type="text" name='number'  className="input" placeholder="Type here" />
                        </fieldset>
          
              
                        <fieldset className="fieldset">
                            Appointment Data
                            <input type="date" name='date' className="input" placeholder="Type here" />
                        </fieldset>
                 
          
                        <fieldset className="fieldset">
                            Address
                            <input type="text" name='address' className="input" placeholder="Type here" />
                        </fieldset>
               

                    <div className='text-center mt-6'>
                    <button  className='btn btn-primary'>Make Appointment</button>
                    </div>

                </form>

                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;