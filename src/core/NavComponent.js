import React from "react";
import "../styles/nav/nav_styles.scss";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <div>
        <h3>
          <Link to="/">Ángela Garcia</Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
