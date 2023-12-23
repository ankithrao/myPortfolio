// Importing React and the required styles
import React from "react";
import "./lightBulb.scss"; // Importing the stylesheet
import BulbSwitch from "./switch/BulbSwitch"; // Importing the BulbSwitch component

// Functional component representing a light bulb
const lightBulb = () => {
  // Rendering the light bulb component
  return (
    <div className="light">
      {/* The wire element */}
      <div className="wire"></div>

      {/* The bulb element with two spans representing light */}
      <div className="bulb">
        <span></span>
        <span></span>
      </div>

      {/* Including the BulbSwitch component to control the bulb */}
      <BulbSwitch />
    </div>
  );
};

export default lightBulb;
