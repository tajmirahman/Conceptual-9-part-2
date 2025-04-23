import { NavLink } from "react-router-dom";

import './Navber.css';


const Navber = () => {
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

            <div className="mr-4">
                <NavLink to={'/login'}><button className="btn btn-primary">Login</button></NavLink>
            </div>
            
        </div>
    );
};

export default Navber;