import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.email) {
    const roles = Array.isArray(auth.role) ? auth.role : [auth.role];

    if (roles.find((role) => allowedRoles.includes(role))) {
      // <Navigate to = "/login" state={{ from: location }}  replace/>
      // return <Navigate to={`/login?redirect=${location.pathname}`} />
      return <Outlet />;
    } else
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else return <Navigate to="/login" state={{ from: location }} replace />;
};
export default RequiredAuth;
