import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import RefugeeStudents from "./RefugeeStudents";

function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const refugeeRef = db.ref("students");
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
    <div>
      {data.map((val, i) => {
        return (
          <RefugeeStudents
            sName={val.studentName}
            levelEduc={val.educationLevel}
            sAge={val.studentAge}
            gender={val.gender}
          />
        );
      })}
    </div>
  );
}

export default Students;
