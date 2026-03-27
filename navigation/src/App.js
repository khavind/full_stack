import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

/* ===== PAGE TRANSITION WRAPPER ===== */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

/* ===== MAIN APP ===== */
function App() {
  return (
    <Router>
      {/* ===== NAVIGATION BAR ===== */}
      <nav className="navbar">
        <Link to="/" className="nav-btn">
          Dashboard
        </Link>

        <Link to="/profile" className="nav-btn">
          Profile
        </Link>
      </nav>

      {/* ===== ROUTES ===== */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;





















































to create a counter application that increment or decrement the count using react single page application simple code without too much css  with steps 