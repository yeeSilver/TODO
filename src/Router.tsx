import { createBrowserRouter } from "react-router-dom";

import TodoUpdateForm from "./Todo/TodoModal/components/todoUpdate/TodoUpdateForm";
import TodoPage from "./pages/todo/TodoPage";
import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import SigninPage from "./pages/auth/Signin_page";
import SignupPage from "./pages/auth/Signup_page";

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>
//           <Route path="/signin" element={<LoginPage />}></Route>
//           <Route path="/signup" element={<RegisterPage />}></Route>
//         </Route>
//         <Route>
//           <Route path="/*" element={<TodoPage />}>
//             <Route path=":editId" element={<TodoUpdateForm />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export const Router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/signin",
        element: <SigninPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
        children: [
          {
            path: ":id",
            element: <TodoUpdateForm />,
          },
        ],
      },
    ],
  },
]);

export default Router;
