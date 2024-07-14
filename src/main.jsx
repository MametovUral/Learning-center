import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./styles/index.css";
import AuthProvider from "./components/providers/auth-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
