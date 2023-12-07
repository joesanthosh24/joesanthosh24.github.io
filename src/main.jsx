import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/homepage/home.page.jsx";
import Services from "./pages/services/services.page.jsx";
import ScheduleCall from "./pages/schedule-a-call/schedule-call.page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/schedule-call" Component={ScheduleCall} />
      </Routes>
      <footer className="container">
        <p>© Copyright Accessible Knowledge Base 2023</p>
      </footer>
    </Router>
  </React.StrictMode>
);
