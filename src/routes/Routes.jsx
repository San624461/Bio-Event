import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import NewsAndInsights from "../Pages/NewsAndInsights/NewsAndInsights";

import Root from "../layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Events from "../Pages/Events/Events";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Member from "../Pages/Member/Member";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/events/:id',
                element: <PrivateRoute> <Events></Events></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/newsandinsights',
                element: <PrivateRoute><NewsAndInsights></NewsAndInsights></PrivateRoute>,
                loader: () => fetch('/data3.json')
            },

            {
                path: '/member',
                element:<PrivateRoute><Member></Member></PrivateRoute>

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router