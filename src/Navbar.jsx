import React from "react";
import { NavLink } from "react-router";
import About from "./About";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar d-flex justify-content-between align-items-center bg-light text-primary p-2 position-fixed w-100">
        <div>
          <h2>Vado Webpage</h2>
        </div>
        <div>
          <ul className="nav-list d-flex gap-3 list-unstyled">
            <li>
             <NavLink to="/">Home</NavLink> </li>
            <li>
              <NavLink to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
