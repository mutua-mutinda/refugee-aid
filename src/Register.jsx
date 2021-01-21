import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState("");
  const [nation, setNation] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    db.ref("refugees/").push({
      firstName: fName,
      lastName: lName,
      gender: gender,
      nationality: nation,
      refugeeAge: age,
      refugeeimg: image,
      created: new Date().toISOString(),
    });
    history.push("/refugeeinfo");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <>
      <div className="refugees">
        <Link to="/refugeeinfo" style={{ textDecoration: "none" }}>
          <button className="refugees__button">Registered Refugees</button>
        </Link>
      </div>
      <div className="register">
        <h2>INPUT REFUGEES DETAILS</h2>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label>FIRST NAME</label>
          <input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
          />

          <label>LAST NAME</label>
          <input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
          />
          <label>GENDER</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">--select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label>NATIONALITY</label>
          <input
            type="text"
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            required
          />

          <label>AGE</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label>IMAGE</label>
          <input
            style={{ border: "#fff" }}
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button disabled={saving || disabled}>
            <span>{saving ? <p>saving</p> : "Save Info"}</span>
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
}

export default Register;
