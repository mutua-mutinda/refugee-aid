import React from "react";
import hses from "./r-hse.jpg";
import edu from "./edu-r.jpg";
import educ from "./educ-r.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__slides">
        <div className="home__content">
          <p>
            Refugees Aid aims to provide refugees fleeing their country because
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
          <p className="home__slidesp">Refugee House Settlement</p>
        </Link>
        <img src={hses} alt="" className="mySlides" />
        <p className="home__slidesp">Refugee Education</p>
        <img src={edu} alt="" className="mySlides" />
        <p className="home__slidesp">Happy Faces</p>
        <img src={educ} alt="" className="mySlides" />
      </div>
    </div>
  );
}

export default Home;
