import {
  LOGIN_ERROR,
  LOGIN_LODING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.action.types";

const tokken = localStorage.getItem("token") || "";

const initialState = {
  loading: false,
  error: false,
  isAuth: !!tokken,
  tokken: "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LODING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("tokken", payload.tokken);
      return {
        ...state,
        loading: false,
        isAuth: true,
        tokken: payload.tokken,
      };
    }

    case LOGOUT: {
      localStorage.removeItem("tokken");
      return {
        ...state,
        isAuth: false,
        tokken: "",
      };
    }

    default: {
      return state;
    }
  }
};
