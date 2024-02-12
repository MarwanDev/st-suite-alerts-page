import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="column">
          <div className="navbar-half">
            <div className="option-container">
              <p className="coming-soon">coming soon</p>
              <p className="option">Trading</p>
            </div>
            <div className="separator" />
            <div className="option-container">
              <p className="coming-soon">coming soon</p>
              <p className="option">Automation</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="navbar-half">
            <div className="separator" />
            <div className="option-container">
              <p className="coming-soon">coming soon</p>
              <p className="option">Portfolio</p>
            </div>
            <div className="separator" />
            <p
              className="option"
              style={{
                marginTop: 25,
                color: "#fff",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              Alerts
            </p>
            <div className="separator" />
            <p
              className="option"
              style={{ marginTop: 25, marginRight: 10, marginLeft: 10 }}
            >
              Training
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
