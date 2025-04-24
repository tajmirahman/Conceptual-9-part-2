
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const  {user,loading}= useContext(authContext);

    if(loading){
        return <h1>Loading...</h1>
    }


    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }

    return children
};

export default PrivateRoute;