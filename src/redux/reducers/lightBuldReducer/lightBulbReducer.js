// Importing the action type constant for the light bulb
import { SET_LIGHT_BULB } from "../../../constants";

// Initial state for the light bulb reducer
const initialState = {
  bulb: false, // Initial state of the light bulb is turned off
};

// Reducer function for handling light bulb state changes
export const lightBulbReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handling the action type for toggling the light bulb
    case SET_LIGHT_BULB: {
      // Returning a new state with the light bulb toggled
      return {
        ...state,
        bulb: !state.bulb, // Toggling the light bulb state
      };
    }
    // Default case, returning the current state for any unknown action type
    default:
      return state;
  }
};
