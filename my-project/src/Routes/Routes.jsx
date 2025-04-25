import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import AllApointments from "../components/AllApointments/AllApointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json();

                    const feedbackRes = await fetch('/feedBack.json');
                    const feedbackData = await feedbackRes.json();

                    return { serviceData, feedbackData }
                }
            },
            {
                path: '/allTreatmens',
                element: <AllTreatments />,
                loader: () => fetch('/service.json')
            },
            {
                path: '/allApointments',
                element: <PrivateRoute>
                    <AllApointments />
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <Details />
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/service.json');
                    const data = await res.json();

                    const singleData = data.find(d => d.id == params.id);

                    return singleData;
                }
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }


        ]
    }
]);


export default router;