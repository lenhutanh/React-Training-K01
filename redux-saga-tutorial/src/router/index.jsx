import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EditUser from "../pages/EditUser";
import UserInfo from "../pages/UserInfo";

export const router = createBrowserRouter([
    {
        path: '/user',
        element: <Home />
    },
    // {
    //     path: '/user/:id',
    //     element: <EditUser />
    // }
    {
        path: '/user/:id',
        element: <UserInfo />
    }
]);