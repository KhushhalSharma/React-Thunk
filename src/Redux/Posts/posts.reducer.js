import {
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from "./posts.action.type";

const initialState = {
  loading: false,
  posts: [],
  error: false,
};

const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    }

    case GET_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default PostsReducer;
