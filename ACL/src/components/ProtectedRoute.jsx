import { Navigate } from "react-router-dom";
import { role_permissions } from "../contants";
import hasPermission from "../utils/hasPermission";

const ProtectedRoute = ({ children, requiredPermission }) => {
    const userRole = localStorage.getItem("role") || "User";
    const permissions = role_permissions[userRole] || [];
    
    return hasPermission(permissions, requiredPermission) 
      ? children 
      : <Navigate to="/403" replace />;
  };
  
  export default ProtectedRoute;