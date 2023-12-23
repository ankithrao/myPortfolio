import React from "react";
import "./bulbSwitch.scss";
import { useDispatch } from "react-redux";
import { bulbSwitchToggle } from "../../redux/actions/lightBulbActons";

const BulbSwitch = () => {
  const dispatch = useDispatch();

  const handleToggleSwitch = () => {
    dispatch(bulbSwitchToggle());
  };
  return (
    <div className="bulbSwitch">
      <div className="btnSwitch" onClick={() => handleToggleSwitch()}></div>
    </div>
  );
};

export default BulbSwitch;
