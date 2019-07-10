import { SET_WEATHER_DATA } from "./types";

export const setWeather = (data: any) => (dispatch: any) => {
  dispatch({
    type: SET_WEATHER_DATA,
    payload: data
  });
};
