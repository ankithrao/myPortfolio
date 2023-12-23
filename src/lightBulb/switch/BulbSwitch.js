// Importing React and the required styles
import React from "react";
import "./bulbSwitch.scss"; // Importing the stylesheet
import { useDispatch } from "react-redux";
import { bulbSwitchToggle } from "../../redux/actions/lightBulbActons"; // Importing the action for toggling the bulb

// Functional component for the bulb switch
const BulbSwitch = () => {
  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Handler function for toggling the bulb switch
  const handleToggleSwitch = () => {
    dispatch(bulbSwitchToggle()); // Dispatching the action to toggle the bulb
  };

  // Rendering the component
  return (
    <div className="bulbSwitch">
      {/* Bulb switch button with a click event to trigger the toggle */}
      <div className="btnSwitch" onClick={() => handleToggleSwitch()}></div>
    </div>
  );
};

export default BulbSwitch;
