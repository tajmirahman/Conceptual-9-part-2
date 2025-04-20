import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import AllApointments from "../components/AllApointments/AllApointments";
import Profile from "../components/Profile/Profile";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/allTreatmens',
                element:<AllTreatments />
            },
            {
                path:'/allApointments',
                element:<AllApointments />
            },
            {
                path: '/profile',
                element:<Profile />
            }

        ]
    }
]);


export default router;