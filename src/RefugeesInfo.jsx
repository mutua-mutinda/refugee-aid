import React from "react";
import aid from "./r-aid.jpg";
import "./RefugeeInfo.css";

function RefugeesInfo({ fName, lName, age, gender, nation }) {
  return (
    <div className="info">
      <div className="refugee__info">
        <img src={aid} alt="" />
        <div className="info__details">
          <p>First Name: {fName}</p>
          <p>Last Name: {lName}</p>
          <p>Age: {age} years</p>
          <p>Gender: {gender}</p>
          <span>Nationality: {nation}</span>
        </div>
      </div>
    </div>
  );
}

export default RefugeesInfo;
