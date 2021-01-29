import React from "react";
import "./RefugeeShelter.css";

function FedRefugees({ FName, MFlour, Rice, Oil, Water }) {
  return (
    <div className="refugeeshelter">
      <div className="refugeeshelter__info">
        <p>
          {" "}
          FirstName: <span>{FName}</span>
        </p>

        <p>
          Maize Flour provided: <span>{MFlour}</span> kgs
        </p>

        <p>
          Amount of Rice provided: <span>{Rice}</span> kgs
        </p>

        <p>
          Amount of cooking oil: <span>{Oil}</span> kgs
        </p>

        <p>
          Water provided: <span>{Water}</span>
        </p>
      </div>
    </div>
  );
}

export default FedRefugees;
