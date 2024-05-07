import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="menu">
        <li>
          <NavLink activebutton='active' to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink activebutton='active' to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink activebutton='active' to="/examples">EXAMPLES</NavLink>
        </li>
        <li>
          <NavLink activebutton='active' to="/contacts">CONTACTS</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
