import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/Login_form";
import TodoDetailForm from "./components/todoDetails/TodoDetailForm";
import TodoUpdateForm from "./components/todoDetails/TodoUpdateForm";
import TodoEditForm from "./components/todoDetails/TodoUpdateForm";
import LoginPage from "./pages/auth/Login_page";
import RegisterPage from "./pages/auth/Register_page";
import TodoPage from "./pages/todo/TodoPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/auth/signin" element={<LoginPage />}></Route>
          <Route path="/auth/signup" element={<RegisterPage />}></Route>
        </Route>
        {/* <Route element={<Outlet />}> */}
        <Route>
          <Route path="/*" element={<TodoPage />}>
            <Route path="details/:editId" element={<TodoUpdateForm />} />
          </Route>
          {/* <Route path="details/:todoId" element={<TodoDetailForm />} /> */}
          {/* <Route path="details/:todoId" element={<TodoEditForm />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
