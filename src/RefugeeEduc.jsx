import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./RefugeeEduc.css";

function RefugeeEduc() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const [sName, setSName] = useState("");
  const [levelEduc, setLevelEduc] = useState("");
  const [sAge, setSAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    db.ref("students/").push({
      studentName: sName,
      educationLevel: levelEduc,
      studentAge: sAge,
      gender: gender,
      created: new Date().toISOString(),
    });
    history.push("/studentinfo");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <>
      <div className="refugees">
        <Link to="/studentinfo" style={{ textDecoration: "none" }}>
          <button className="refugees__button">Enrolled Students</button>
        </Link>
      </div>
      <div className="education">
        <div className="education__form">
          <h2>Student Details</h2>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <label>Student Name:</label>
            <input
              type="text"
              value={sName}
              onChange={(e) => setSName(e.target.value)}
              required
            />
            <label>Level of Education</label>
            <input
              type="text"
              value={levelEduc}
              onChange={(e) => setLevelEduc(e.target.value)}
              required
            />
            <label>Student Age</label>
            <input
              type="number"
              value={sAge}
              onChange={(e) => setSAge(e.target.value)}
              required
            />
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">--select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button disabled={saving || disabled}>
              <span>{saving ? <p>saving</p> : "Save Info"}</span>
            </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default RefugeeEduc;
