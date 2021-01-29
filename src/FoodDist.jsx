import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./FoodDist.css";

function FoodDist() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [fName, setFName] = useState("");
  const [MFlour, setMFlour] = useState("");
  const [Rice, setRice] = useState("");
  const [Oil, setOil] = useState("");
  const [water, setWater] = useState("");
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

    db.ref("food/").push({
      firstName: fName,
      flour: MFlour,
      rice: Rice,
      oil: Oil,
      water: water,
      created: new Date().toISOString(),
    });
    history.push("/fed-refugees");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <>
      <div className="refugees">
        <Link to="/fed-refugees" style={{ textDecoration: "none" }}>
          <button className="refugees__button">Fed Refugees</button>
        </Link>
      </div>
      <div className="foodist">
        <div className="foodist__allocation">
          <h2>Food Distribution</h2>
          <div className="foodist__form">
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <label>Choose Name:</label>
              <select
                className="foodistform"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                required
              >
                <option value="">--select--</option>
                {data.map((val, i) => {
                  return <option>{val.firstName}</option>;
                })}
              </select>

              <label>Maize Flour: (kgs)</label>
              <input
                type="number"
                value={MFlour}
                onChange={(e) => setMFlour(e.target.value)}
                required
              />

              <label>Rice: (kgs)</label>
              <input
                type="number"
                value={Rice}
                onChange={(e) => setRice(e.target.value)}
                required
              />

              <label>Cooking Oil: (litres)</label>
              <input
                type="number"
                value={Oil}
                onChange={(e) => setOil(e.target.value)}
                required
              />

              <label>Water: (litres) </label>
              <input
                type="number"
                value={water}
                onChange={(e) => setWater(e.target.value)}
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

export default FoodDist;
