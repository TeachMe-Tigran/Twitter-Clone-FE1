import * as actions from "./actionTypes";

export const addTweet = (data) => (dispatch) => {
  dispatch({ type: actions.ADD_TWEET, data });
};
