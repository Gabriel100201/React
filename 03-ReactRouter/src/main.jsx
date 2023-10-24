import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./AppRoutes-3.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginProvider>,
);
