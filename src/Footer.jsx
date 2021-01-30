import React from "react";
import help from "./help.png";
import "./Footer.css";
import partner from "./pa-r.png";

function Footer() {
  return (
    <div className="footer">
      <img src={help} alt="" />
      <div className="footer__name">
        <p>Refugee Aid</p>
      </div>
      <div className="footer__info">
        <p>In Paternship with</p>
        <img src={partner} alt="" />
      </div>
    </div>
  );
}

export default Footer;
