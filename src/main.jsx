import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "sonner";


ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  
  <Toaster  richColors />  

  </React.StrictMode>
);
