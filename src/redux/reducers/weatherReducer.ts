import { SET_WEATHER_DATA } from "../actions/types";

const initialState: any = {};

export default (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WEATHER_DATA:
      return payload;
    default:
      return state;
  }
};
