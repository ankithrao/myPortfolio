import React from "react";
import lightBulb from "./lightBulb/lightBulb";
import "./myPortfolio.scss";

function myPortfolio() {
  return <div className="lightBulbContainer">{lightBulb()}</div>;
}

export default myPortfolio;
