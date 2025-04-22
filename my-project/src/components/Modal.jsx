import React from 'react';

const Modal = () => {

    const handleForm=(e)=>{
        e.preventDefault();

        // console.log(e);


        const  fName=e.target.fname.value;
        const  lName=e.target.lname.value;
    

        console.log(fName,lName)
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
                            <input type="text" name='email' className="input" placeholder="Type here" />
                        </fieldset>
                   
                        <fieldset className="fieldset">
                            Phone Number
                            <input type="text" name='number'  className="input" placeholder="Type here" />
                        </fieldset>
          
              
                        <fieldset className="fieldset">
                            Appointment Data
                            <input type="date" className="input" placeholder="Type here" />
                        </fieldset>
                 
          
                        <fieldset className="fieldset">
                            Address
                            <input type="text" className="input" placeholder="Type here" />
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