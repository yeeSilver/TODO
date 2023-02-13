import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/auth/Login_form";
import Test from "./components/todoDetails/Test";
import TodoDetailForm from "./components/todoDetails/TodoDetailForm";
import TodoUpdateForm from "./components/todoDetails/TodoUpdateForm";
import TodoEditForm from "./components/todoDetails/TodoUpdateForm";
import LoginPage from "./pages/auth/Login_page";
import RegisterPage from "./pages/auth/Register_page";
import TodoPage from "./pages/todo/TodoPage";
import Authenticate from "./router/router";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/*" element={<LoginPage />}></Route>
          <Route path="signup" element={<RegisterPage />}></Route>
        </Route>
        <Route>
          <Route path="/todos/*" element={<TodoPage />}>
            <Route path="details/:editId" element={<TodoUpdateForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <Route path="details/:editId" element={<TodoUpdateForm />} /> */
}

export default Router;
