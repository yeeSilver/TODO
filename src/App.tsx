import { Reset } from "styled-reset";
import "./assets/fonts/font.css";
import Login_page from "./pages/auth/Login_page";

function App() {
  return (
    <div className="App">
      <Reset />
      <Login_page />
    </div>
  );
}

export default App;
