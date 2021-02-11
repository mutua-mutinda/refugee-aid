import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import RefugeeShelter from "./RefugeeShelter";
import "./Shelter.css";

function Shelter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const refugeeRef = db.ref("shelter");
    refugeeRef.on("value", (snapshot) => {
      const refugee = snapshot.val();
      if (refugee !== null) {
        let values = [];
        Object.keys(refugee).forEach((key) => {
          values.push(refugee[key]);
          setData(values);
        });
      }
    });
  }, [data.length]);
  return (
    <div className="shelter">
      {data.map((val, i) => {
        return (
          <RefugeeShelter
            key={i}
            fName={val.firstName}
            RTent={val.tents}
            RBeddings={val.beddings}
          />
        );
      })}
    </div>
  );
}

export default Shelter;
