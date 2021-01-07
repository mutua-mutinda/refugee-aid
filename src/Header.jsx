import React from "react";
import { Link } from "react-router-dom";
import help from "./help.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="header__img" src={help} alt="" />
      </Link>
      <h3>Refugee Aid</h3>
      <div className="header__register">
        <Link style={{ textDecoration: "none" }} to="/register">
          <button className="header__registerbtn">Register Refugee</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
