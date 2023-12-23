// reducers/index.js
import { combineReducers } from "redux";
import { lightBulbReducer } from "./lightBuldReducer/lightBulbReducer"; // Create this file

const rootReducer = combineReducers({
  lightBulbReducer: lightBulbReducer,
  // Add more reducers if needed
});

export default rootReducer;
