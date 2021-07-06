import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path }) => {
  return (
    <li className="nav-item px-md-5 mx-auto">
      <NavLink className="nav-link" to={path}>
        {name}
      </NavLink>
    </li>
  );
};

function MainNav() {
  const [show, setShow] = useState("");

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          Image App
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow((prev) => (prev === "" ? "show" : ""))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${show}`}>
          <ul className="navbar-nav">
            <NavItem name="Home" path="/" />
            <NavItem name="Add Image" path="/new" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
