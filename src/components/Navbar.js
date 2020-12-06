import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-1 h1">Raymond Tieu</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link style={{color: "white", marginLeft: "10px", marginRight: "20px"}} to="/aboutme">About Me</Link>
          </li>
          <li className="nav-item">
            <Link style={{color: "white"}} to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;