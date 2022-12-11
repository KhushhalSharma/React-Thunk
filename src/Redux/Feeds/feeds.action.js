import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
} from "./feeds.action.type";
import axios from "axios";

const getFeed = async (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  try {
    let res = await axios.get(" http://localhost:8080/feeds");
    dispatch({ type: GET_FEEDS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("error:", error);
    dispatch({ type: GET_FEEDS_ERROR, payload: error });
  }
};

export default getFeed;
