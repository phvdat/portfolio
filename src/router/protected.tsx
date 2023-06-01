import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RoutePath } from "../constants/routes";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const redirect = RoutePath.Index;
  return (
    <>
      {isAuthenticated ? (
        children || <Outlet />
      ) : (
        <Navigate to={redirect} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
