import { Reset } from "styled-reset";
import "./assets/fonts/font.css";
import Create_form from "./components/auth/Create_form";
import Login_form from "./components/auth/Login_form";
import Login_page from "./pages/auth/Login_page";
import Register_page from "./pages/auth/Register_page";

function App() {
  return (
    <div className="App">
      <Reset />
      {/* <Create_form />
      <Login_form /> */}
      <Login_page />
      {/* <Register_page /> */}
    </div>
  );
}

export default App;
