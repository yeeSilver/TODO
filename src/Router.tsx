import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/Login_form";
import LoginPage from "./pages/auth/Login_page";
import RegisterPage from "./pages/auth/Register_page";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* coins스크린 랜더링 홈페이지 */}
        <Route path="/auth">
          <Route path="signup" element={<LoginPage />}></Route>
          <Route path="login" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
