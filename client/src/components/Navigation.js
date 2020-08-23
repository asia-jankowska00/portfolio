import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Navigation.scss";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="nav-desktop show-on-scroll">
        <ul>
          <li className="white-underline-hover">
            <Link to="/">home</Link>
          </li>
          <li className="white-underline-hover">
            <Link to="/projects">projects</Link>
          </li>
          <li className="white-underline-hover">
            <Link to="/skills">skills</Link>
          </li>
          <li className="white-underline-hover">
            <Link to="/values">values</Link>
          </li>
          <li className="white-underline-hover">
            <Link to="/story">story</Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-mobile show-on-scroll pointer-events-none">
        <h2 className="margin-0">
          <i
            className="fas fa-bars pointer-events-initial"
            id="menuHamburger"
          ></i>
        </h2>
        <ul className="hidden" id="menuUl">
          <li className="gradient-half-background">
            <Link to="/">home</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/projects">projects</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/skills">skills</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/values">values</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/story">story</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
