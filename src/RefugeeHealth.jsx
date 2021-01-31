import React from "react";
import "./RefugeeShelter.css";

function RefugeeHealth({ fName, Diagnosis, Prescription }) {
  return (
    <div className="refugeeshelter">
      <div className="refugeeshelter__info">
        <p>
          First Name: <span>{fName}</span>
        </p>

        <p>
          Refugees Diagnosis: <span>{Diagnosis}</span>
        </p>

        <p>
          Doctor's Prescription to {fName}: <span>{Prescription}</span>
        </p>
      </div>
    </div>
  );
}

export default RefugeeHealth;
