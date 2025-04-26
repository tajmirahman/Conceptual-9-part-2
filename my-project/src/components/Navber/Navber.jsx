import { NavLink } from "react-router-dom";

import './Navber.css';
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";



const Navber = () => {

    const { user, handleLogout } = useContext(authContext);

    return (
        <div className="min-h-20 bg-blue-900 flex justify-between items-center text-white">

            <div>
                <h1 className="text-xl font-extrabold lg:ml-4 ml-2">TEETH WIZARD</h1>
            </div>

            <div className="lg:space-x-4 ml-1 space-x-1">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/allTreatmens'}>All Treatments</NavLink>
                <NavLink to={'/allApointments'}>All Apoinments</NavLink>
                {
                    user &&
                    <NavLink to={'/profile'}>Profile</NavLink>
                }
            </div>

            <div className="mr-4 flex justify-center items-center gap-3">
                <div>
                    {
                        user && user?.email ?
                            <div >
                                <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </div>

                            :''
                            
                    }
                </div>
                <div>
                    {
                        user && user?.email ? <button onClick={handleLogout} className="btn">Logout</button>
                            :
                            <NavLink to={'/login'}><button className="btn btn-primary">Login</button></NavLink>
                    }
                </div>



            </div>

        </div>
    );
};

export default Navber;