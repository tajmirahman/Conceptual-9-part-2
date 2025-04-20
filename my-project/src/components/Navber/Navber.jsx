import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div className="min-h-20 bg-red-500">

            <div>
                <h1>TEETH WIZARD</h1>
            </div>

            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/allTreatmens'}>All Treatments</NavLink>
                <NavLink to={'/allApointments'}>All Apoinments</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>

            <div>
                <button className="btn btn-primary">Login</button>
            </div>
            
        </div>
    );
};

export default Navber;