import React, { useEffect, useState } from "react";
import "./RefugeesHealth.css";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";

function RefugeesHealth() {
  const history = useHistory("");
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [fName, setFName] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");
  const [Prescription, setPrescription] = useState("");
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

    db.ref("health/").push({
      firstName: fName,
      diagnosis: Diagnosis,
      prescription: Prescription,
      created: new Date().toISOString(),
    });
    history.push("/refugeeshealth");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <>
      <div className="refugees">
        <Link to="/refugeeshealth" style={{ textDecoration: "none" }}>
          <button className="refugees__button">Health Track</button>
        </Link>
      </div>
      <div className="health">
        <div className="health__form">
          <h2>Health Track</h2>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <label>Refugees Name</label>
            <select
              className="healthform"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
            >
              <option value="">--select--</option>
              {data.map((val, i) => {
                return <option>{val.firstName}</option>;
              })}
            </select>

            <label>Refugee Diagnosis</label>
            <textarea
              type="text"
              value={Diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              required
            />

            <label>Doctors Prescription</label>
            <textarea
              type="text"
              value={Prescription}
              onChange={(e) => setPrescription(e.target.value)}
              required
            />

            <button disabled={saving || disabled}>
              <span>{saving ? saving : "Save Info"}</span>
            </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default RefugeesHealth;
