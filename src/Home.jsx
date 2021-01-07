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
        <img src={train} alt="" className="mySlides" />
        <img src={hses} alt="" className="mySlides" />
        <img src={edu} alt="" className="mySlides" />
        <img src={educ} alt="" className="mySlides" />
      </div>
    </div>
  );
}

export default Home;
