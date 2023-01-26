import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/Login_form";
import LoginPage from "./pages/auth/Login_page";
import RegisterPage from "./pages/auth/Register_page";
import TodoPage from "./pages/todo/TodoPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />}></Route>
        <Route path="/auth/signup" element={<RegisterPage />}></Route>
        <Route path="/auth/todo" element={<TodoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
