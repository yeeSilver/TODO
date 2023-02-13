import { Link, Navigate, Outlet } from "react-router-dom";
import token from "../utils/localStorage";

const Authenticate = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const Authtoken = token.getToken("token");
  if (isAuthenticated) {
    return Authtoken ? <Outlet /> : <Navigate to="/auth/signin" />;
  } else {
    return Authtoken ? <Navigate to="/" /> : <Outlet />;
  }
};

export default Authenticate;
