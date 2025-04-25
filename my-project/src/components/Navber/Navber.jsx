import { NavLink } from "react-router-dom";

import './Navber.css';
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import userLogo from '../../assets/images.png'


const Navber = () => {

    const { user, handleLogout } = useContext(authContext);

    return (
        <div className="min-h-20 bg-blue-900 flex justify-between items-center text-white">

            <div>
                <h1 className="text-xl font-extrabold ml-4">TEETH WIZARD</h1>
            </div>

            <div className="space-x-4">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/allTreatmens'}>All Treatments</NavLink>
                <NavLink to={'/allApointments'}>All Apoinments</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>

            <div className="mr-4 flex justify-center items-center gap-3">
                <div>
                    {
                        user && user?.email ?
                            <div >
                                <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />
                                <p>{user?.displayName}</p>
                            </div>

                            :
                            <img className='w-10 h-10 rounded-full' src={userLogo} alt="" />
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