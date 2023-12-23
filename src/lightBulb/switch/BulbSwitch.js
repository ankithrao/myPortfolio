import React from "react";
import "./bulbSwitch.scss";
import { useDispatch } from "react-redux";
import { bulbSwitchToggle } from "../../redux/actions/lightBulbActons";

const BulbSwitch = () => {
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch(bulbSwitchToggle(true));
  };
  return (
    <div className="bulbSwitch">
      <div className="btnSwitch" onClick={() => toggleSwitch()}></div>
    </div>
  );
};

export default BulbSwitch;
