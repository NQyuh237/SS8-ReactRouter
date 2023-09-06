import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const styleNavLink = ({ isActive }) => ({
    color: isActive ? "white" : "green",
    backgroundColor: isActive ? "black" : "white",
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className={"nav-link"} to={"/"} style={styleNavLink}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={"nav-link"}
                  to={"/about"}
                  style={styleNavLink}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={"nav-link"}
                  to={"/portfolio"}
                  style={styleNavLink}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={"nav-link"}
                  to={"/contact"}
                  style={styleNavLink}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
