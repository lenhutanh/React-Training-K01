import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EditUser from "../pages/EditUser";

export const router = createBrowserRouter([
    {
        path: '/user',
        element: <Home />
    },
    {
        path: '/user/:id',
        element: <EditUser />
    }
]);