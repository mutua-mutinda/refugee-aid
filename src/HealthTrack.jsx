import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import RefugeeHealth from "./RefugeeHealth";

function HealthTrack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const refugeeRef = db.ref("health");
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
    <div className="healthtrack">
      {data.map((val, i) => {
        return (
          <RefugeeHealth
            key={i}
            fName={val.firstName}
            Diagnosis={val.diagnosis}
            Prescription={val.prescription}
          />
        );
      })}
    </div>
  );
}

export default HealthTrack;
