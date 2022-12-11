import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LODING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.action.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LODING });
  try {
    let res = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("error:", error);
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};

export const logout = () => ({ type: LOGOUT });
