import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiMovieLine } from "react-icons/ri";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPages";

import Profile from "./pages/Profile";
// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <footer>
          <NavLink to="/" className="iconWrapper">
            <RiMovieLine className="icon" />
            Movie
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <HiOutlineUserGroup className="icon" />
            Profile
          </NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;
