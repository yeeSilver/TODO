import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/token";
import token from "../utils/localStorage";

const PublicRouter = () => {
  const { pathname } = useLocation();
  const 토큰 = token.getToken(ACCESS_TOKEN_KEY);

  if (pathname === "/") {
    return 토큰 ? <Navigate to="/todos" replace /> : <Outlet />;
  }
  return 토큰 ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRouter;
