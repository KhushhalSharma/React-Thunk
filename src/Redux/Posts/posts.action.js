import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
} from "./posts.action.type";
import axios from "axios";
export const getPost = async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let res = await axios.get(" http://localhost:8080/posts");
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("error:", error);
    dispatch({ type: GET_POSTS_ERROR, payload: error });
  }
};
