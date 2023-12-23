// Importing the action type constant for the light bulb
import { SET_LIGHT_BULB } from "../../constants";

// Action creator function for toggling the light bulb
export const bulbSwitchToggle = () => ({
  type: SET_LIGHT_BULB, // Dispatching the action type to set the light bulb state
});
