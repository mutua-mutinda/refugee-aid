import React from "react";
import aid from "./help.png";
import "./RefugeeInfo.css";

function RefugeesInfo({ fName, lName, age, gender, nation }) {
  return (
    <div className="refugeeinfo">
      <img src={aid} alt="" />
      <div className="refugeeinfo__details">
        <p>
          First Name: <span>{fName}</span>
        </p>
        <p>
          Last Name: <span>{lName}</span>
        </p>
        <p>
          Age: <span>{age}</span> years
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Nationality: <span>{nation}</span>
        </p>
      </div>
    </div>
  );
}

export default RefugeesInfo;
