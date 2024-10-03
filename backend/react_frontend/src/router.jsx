import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import NotFound from "./components/NotFound";
import DefaultLayout from './layouts/DefaultLayout'
import GuestLayout from "./layouts/GuestLayout";
import Calculator from "./components/Calculator";
import Requests from "./components/Requests";
import AdminPanel from "./components/admin/AdminPanel"

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/calculator' />
            },

            {
                path: '/calculator',
                element: <Calculator />
            },
            
            {
                path: '/requests',
                element: <Requests />
            },

            {
                path: '/admin',
                element: <AdminPanel />
            },
        ]
    },

    
    {
        path: '/',
        element: <GuestLayout />,
        children: [

            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },


    {
        path: '*',
        element: <NotFound />
    },

]);

export default router;