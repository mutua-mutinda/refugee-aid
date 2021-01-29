import React, { useEffect, useState } from "react";
import FedRefugees from "./FedRefugees";
import { db } from "./firebase";

function RefugeesFed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const refugeeRef = db.ref("food");
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
  console.log(data);

  return (
    <div className="refugeefed">
      {data.map((val, i) => {
        return (
          <FedRefugees
            key={i}
            FName={val.firstName}
            MFlour={val.flour}
            Rice={val.rice}
            Oil={val.oil}
            Water={val.water}
          />
        );
      })}
    </div>
  );
}

export default RefugeesFed;
