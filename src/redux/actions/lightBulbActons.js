// actions
import { SET_LIGHT_BULB } from "../../constants";
export const bulbSwitchToggle = (data) => ({
  type: SET_LIGHT_BULB,
  payload: data,
});
