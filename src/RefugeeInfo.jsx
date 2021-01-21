import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import RefugeesInfo from "./RefugeesInfo";

function RefugeeInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const refugeeRef = db.ref("refugees");
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
    <div className="info">
      <div className="refugee__info">
        <div className="info__details">
          {data.map((val, i) => {
            return (
              <RefugeesInfo
                key={i}
                image={val.regugeeimg}
                fName={val.firstName}
                lName={val.lastName}
                gender={val.gender}
                nation={val.nationality}
                age={val.refugeeAge}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RefugeeInfo;
