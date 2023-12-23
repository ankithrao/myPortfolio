import { SET_LIGHT_BULB } from "../../../constants";

const initialState = {
  bulb: false,
};

export const lightBulbReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_BULB: {
      return {
        ...state,
        bulb: action.payload,
      };
    }
    default:
      return state;
  }
};
