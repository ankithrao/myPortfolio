// Importing necessary dependencies and components
import React from "react";
import { useSelector } from "react-redux";
import lightBulb from "./lightBulb/lightBulb";
import switchSound from "./assets/click.mp3"; // Importing the sound file
import "./myPortfolio.scss"; // Importing the stylesheet

function MyPortfolio() {
  // Retrieving the state value for the light bulb toggle from Redux
  const toggleSwitch = useSelector((state) => state.lightBulbReducer.bulb);

  // Creating an instance of the Audio class for the switch sound
  const audio = new Audio(switchSound);

  // Function to determine the CSS class based on the toggle state
  const handleClassName = () => {
    if (toggleSwitch) {
      // If the toggle is true, play the switch sound and return 'on'
      audio.play();
      return "on";
    } else {
      // If the toggle is false, return an empty string
      return "";
    }
  };

  // Rendering the component
  return (
    <div className={`lightBulbContainer ${handleClassName()}`}>
      {lightBulb()} {/* Rendering the light bulb component */}
    </div>
  );
}

export default MyPortfolio;
