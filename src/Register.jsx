import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="register">
      <h2>INPUT REFUGEES DETAILS</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>FIRST NAME</label>
        <input type="text" />

        <label>LAST NAME</label>
        <input type="text" />
        <label>GENDER</label>
        <select name="" id="">
          <option value="">Male</option>
          <option value="">Female</option>
        </select>

        <label>NATIONALITY</label>
        <input type="text" />

        <label>AGE</label>
        <input type="number" />

        <label>IMAGE</label>
        <input style={{ border: "#fff" }} type="file" />

        <button disabled={saving || disabled}>
          <span>{saving ? <p>saving</p> : "Save Info"}</span>
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Register;
