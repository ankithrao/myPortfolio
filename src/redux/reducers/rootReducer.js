// Importing the combineReducers function from the Redux library
import { combineReducers } from "redux";

// Importing the light bulb reducer from the specified file path
import { lightBulbReducer } from "./lightBuldReducer/lightBulbReducer"; // Create this file

// Combining multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  lightBulbReducer: lightBulbReducer, // Assigning the lightBulbReducer to a specific key in the root state
});

// Exporting the combined rootReducer
export default rootReducer;
