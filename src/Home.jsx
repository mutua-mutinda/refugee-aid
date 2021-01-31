import React from "react";
import hses from "./tents.jpg";
import edu from "./education.jpg";
import educ from "./educ.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__slides">
        <div className="home__content">
          <p>
            Refugee Aid aims to provide refugees fleeing their country because
            of war with{" "}
            <Link to="/refugeehse" style={{ fontWeight: "500" }}>
              Shelter,
            </Link>{" "}
            <Link to="/food-dist" style={{ fontWeight: "500" }}>
              Food
            </Link>{" "}
            and{" "}
            <Link to="/refugeehealth" style={{ fontWeight: "500" }}>
              Health Care
            </Link>
            .
          </p>
        </div>
        <Link to="/refugeehse" style={{ textDecoration: "none" }}>
          <p className="home__slidespt">Refugee House Settlement</p>
        </Link>
        <img src={hses} alt="" className="mySlides" />
        <p className="home__slidesp">Refugee Education</p>
        <img src={edu} alt="" className="mySlides" />
        <p className="home__slidesp">Happy Minds</p>
        <img src={educ} alt="" className="mySlides" />
      </div>
    </div>
  );
}

export default Home;
