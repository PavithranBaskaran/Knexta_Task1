import React from "react";
import "../CSS/navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="nav-heading">BASIC/DEPT</div>
        <div className="nav-list">
          <div className="nav-item">WORK</div>
          <div className="nav-item">ABOUT</div>
          <div className="nav-item">NEWS</div>
          <div className="nav-item">THINKING</div>
          <div className="nav-item">PLEDGE</div>
          <div className="nav-item">CAREERS</div>
          <div className="nav-item">CONTACT</div>
        </div>
        <div className="nav-last">...</div>
      </div>
    </div>
  );
}

export default Navbar;
