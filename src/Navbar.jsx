import React, { useState } from "react";
import { NavLink } from "react-router";
import vadotech from "./assets/vadotech.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center bg-light text-primary p-2 position-fixed w-100">
      <img src={vadotech} alt="" />

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-list gap-3 list-unstyled ${open ? "active" : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
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
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
