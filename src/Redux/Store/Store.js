import {
  combineReducers,
  compose,
  legacy_createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "../Auth/auth.reducer";
import feedsReducer from "../Feeds/feeds.reducer";
import PostsReducer from "../Posts/posts.reducer";

const rootReducer = combineReducers({
  authManager: AuthReducer,
  postsManager: PostsReducer,
  feedsManager: feedsReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
