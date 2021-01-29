import React from "react";
import "./RefugeeShelter.css";

function RefugeeShelter({ fName, RTent, RBeddings }) {
  return (
    <div className="refugeeshelter">
      <div className="refugeeshelter__info">
        <p>
          FirstName: <span>{fName}</span>
        </p>
        <p>
          Tents: <span>{RTent} </span> Tents
        </p>
        <p>
          Beddings: <span>{RBeddings} </span> Pairs
        </p>
      </div>
    </div>
  );
}

export default RefugeeShelter;
