import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/token";
import token from "../utils/localStorage";
// 현재 페이지에 토큰이 있으면 원하는 페이지로 이동, 토큰X 자식 라우트의 요소를 랜더링

const PublicRoute = () => {
  const { pathname } = useLocation();
  const 토큰 = token.getToken(ACCESS_TOKEN_KEY);

  if (pathname === "/") {
    return 토큰 ? <Navigate to="/" replace /> : <Outlet />;
  }
  return 토큰 ? <Navigate to="/signin" replace /> : <Outlet />;
};

// const PublicRoute = ({ children }) => {
//   const 토큰 = token.getToken(ACCESS_TOKEN_KEY);
//   return 토큰 ? <Navigate to="/" /> : children;
// };

export default PublicRoute;
