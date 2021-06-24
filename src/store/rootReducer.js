import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  tweets: tweetReducer,
  profile: profileReducer,
});

export default rootReducer;
