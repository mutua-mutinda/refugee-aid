import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h2>INPUT REFUGEES DETAILS</h2>
      <form action="">
        <label>FIRST NAME</label>
        <input type="text" />
        <label>LAST NAME</label>
        <input type="text" />
        <label>FIRST NAME</label>
        <input type="text" />
        <label>NATIONALITY</label>
        <input type="text" />
        <label>AGE</label>
        <input type="number" />
        <label>IMAGE</label>
        <input type="file" />
      </form>
    </div>
  );
}

export default Register;
