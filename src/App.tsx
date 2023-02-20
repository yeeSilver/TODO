import { Reset } from "styled-reset";
import "./assets/fonts/font.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Reset />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
