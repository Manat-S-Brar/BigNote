import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const currTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currTime);

  function newTime() {
    const newT = new Date().toLocaleTimeString();
    setTime(newT);
  }

  setInterval(newTime, 1000);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <NavLink
            className="navbar-brand"
            style={{ fontSize: "1.5rem" }}
            to="/BigNote"
          >
            Big
            <i
              className="fab fa-neos"
              style={{
                fontSize: "1.8rem",
                color: "#198754",
              }}
            ></i>
            ote
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    borderBottom: "1px solid",
                  }}
                  className="nav-link"
                  exact
                  to="/BigNote"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    borderBottom: "1px solid",
                  }}
                  className="nav-link"
                  to="/Notes"
                >
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    borderBottom: "1px solid",
                  }}
                  className="nav-link"
                  to="/todo"
                >
                  To-do
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span
                  className="nav-link text-light"
                  style={{ fontSize: "1.5rem" }}
                >
                  {time}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
