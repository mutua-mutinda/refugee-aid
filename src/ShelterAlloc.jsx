import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./ShelterAlloc.css";

function ShelterAlloc() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [fName, setFName] = useState("");
  const [RTent, setRTent] = useState("");
  const [RBeddings, setRBeddings] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    db.ref("shelter/").push({
      firstName: fName,
      tents: RTent,
      beddings: RBeddings,
      created: new Date().toISOString(),
    });
    history.push("/refugeeshelter");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <>
      <div className="refugees">
        <Link to="/refugeeshelter" style={{ textDecoration: "none" }}>
          <button className="refugees__button">Housed Refugees</button>
        </Link>
      </div>
      <div className="shelter">
        <div className="shelter__info">
          <h2>Housing</h2>
          <div className="shelter__form">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <label>Choose Name:</label>
              <select
                className="shelterform"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                required
              >
                <option value="">--select--</option>
                {data.map((val, i) => {
                  return <option>{val.firstName}</option>;
                })}
              </select>
              <label>Tents:</label>
              <input
                type="number"
                value={RTent}
                onChange={(e) => setRTent(e.target.value)}
                required
              />
              <label>Beddings:</label>
              <input
                type="number"
                value={RBeddings}
                onChange={(e) => setRBeddings(e.target.value)}
                required
              />
              <button disabled={saving || disabled}>
                <span>{saving ? <p>saving</p> : "Save Info"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShelterAlloc;
