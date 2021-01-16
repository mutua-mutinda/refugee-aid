import React from "react";
import hses from "./r-hse.jpg";
import train from "./train-r.jpg";
import edu from "./edu-r.jpg";
import educ from "./educ-r.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__slides">
        {/* <img src={train} alt="" className="mySlides" /> */}
        <div className="home__content">
          <p>
            Refugees Aid aims to provide refugees fleeing their country because
            of war with shelter, food and health care.
          </p>
        </div>
        <p>Refugee House Settlement</p>
        <img src={hses} alt="" className="mySlides" />
        <p>Refugee Education</p>
        <img src={edu} alt="" className="mySlides" />
        <p>Happy Faces</p>
        <img src={educ} alt="" className="mySlides" />
      </div>
    </div>
  );
}

export default Home;
