import React, { useState } from "react";
import "./Home.css";
import Register from "./Register";

function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="home">
      <div className="home__register">
        <button
          onClick={() => {
            showForm && <Register />;
          }}
        >
          Register Refugee
        </button>
      </div>
    </div>
  );
}

export default Home;
