import React from "react";
import "./NavBar.css";

const NavBar = (props) => (
  <nav className="NavBarStyling navbar navbar-expand-lg">
    <a className="navbar-brand nav1" href="/">
      <img src="/assets/brand/favicon.ico" width="30" height="30" alt=""/>
      &emsp;Clicky Game&emsp;
    </a>
    <a href="/" className="nav-link nav2">
      &emsp;{props.guess}&emsp;
    </a>
    <a href="/" className="nav-link nav2">
      &emsp;Score:  {props.score} | Top Score:  {props.highScore}&emsp;
    </a>
  </nav>
);

export default NavBar;
