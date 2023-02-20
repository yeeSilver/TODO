import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../constants/token";
import token from "../utils/localStorage";
//토큰이 없다면 루트로 이동, 토큰 있으면 자식 라우트 랜더링
// const PrivateRoute = ({ children }) => {
//   const 토큰 = token.getToken(ACCESS_TOKEN_KEY);
//   return 토큰 ? children : <Navigate to="/" />;
// };
const PrivateRoute = () => {
  const 토큰 = token.getToken(ACCESS_TOKEN_KEY);

  return !토큰 ? <Navigate to="/signin" replace /> : <Outlet />;
};

export default PrivateRoute;
