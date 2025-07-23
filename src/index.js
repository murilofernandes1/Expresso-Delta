import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Coleta from "./routes/Coleta";
import Sobre from "./routes/Sobre";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Coleta" element={<Coleta />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
