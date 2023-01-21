import { Reset } from "styled-reset";
import "./assets/fonts/font.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Reset />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
}

export default App;
