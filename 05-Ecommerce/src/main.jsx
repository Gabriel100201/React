import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";
import { LoginProvider } from "./context/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>,
);
