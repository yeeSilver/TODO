import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoUpdateForm from "./Todo/TodoModal/components/todoUpdate/TodoUpdateForm";

import LoginPage from "./pages/auth/Login_page";
import RegisterPage from "./pages/auth/Register_page";
import TodoPage from "./pages/todo/TodoPage";

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
