import React from "react";
import "./RefugeeShelter.css";

function RefugeeStudents({ sName, levelEduc, sAge, gender }) {
  return (
    <div className="refugeeshelter">
      <div className="refugeeshelter__info">
        <p>
          Student Name: <span>{sName}</span>{" "}
        </p>
        <p>
          Student Level of Education: <span>{levelEduc}</span>{" "}
        </p>
        <p>
          Student Age: <span>{sAge}</span>{" "}
        </p>
        <p>
          Student Gender: <span>{gender}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default RefugeeStudents;
