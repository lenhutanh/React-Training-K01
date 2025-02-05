import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";
import ForbiddenPage from "../pages/ForbiddenPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/create",
        element: (
            <ProtectedRoute requiredPermission="create">
                <CreatePost />
            </ProtectedRoute>
        ),
    },
    {
        path: "/edit/:id",
        element: (
            <ProtectedRoute requiredPermission="edit">
                <EditPost />
            </ProtectedRoute>
        ),
    },
    {
        path: "/403",
        element: <ForbiddenPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]);

export default router;