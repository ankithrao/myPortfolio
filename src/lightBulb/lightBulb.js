import React from "react";
import "./lightBulb.scss";
import BulbSwitch from "./switch/BulbSwitch";

const lightBulb = () => {
  return (
    <div className="light">
      <div className="wire"></div>
      <div className="bulb">
        <span></span>
        <span></span>
      </div>
      <BulbSwitch />
    </div>
  );
};

export default lightBulb;
