import React from "react";
import { useSelector } from "react-redux";
import lightBulb from "./lightBulb/lightBulb";
import switchSound from "./assets/click.mp3";
import "./myPortfolio.scss";

function MyPortfolio() {
  const toggleSwitch = useSelector((state) => state.lightBulbReducer.bulb);
  const audio = new Audio(switchSound);

  const handleClassName = () => {
    if (toggleSwitch) {
      audio.play();
      return "on";
    } else {
      return "";
    }
  };
  return (
    <div className={`lightBulbContainer ${handleClassName()}`}>
      {lightBulb()}
    </div>
  );
}

export default MyPortfolio;
