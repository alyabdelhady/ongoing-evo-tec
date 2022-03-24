import React from "react";
import Navbar from "../Components/Navbar/Navbar";
function About() {
  return (
    <div>
      <Navbar />
      <div>
        <h1
          style={{ marginTop: "50px", fontWeight: "bold" }}
          className="text-center"
        >
          About Us
        </h1>
      </div>
    </div>
  );
}

export default About;
