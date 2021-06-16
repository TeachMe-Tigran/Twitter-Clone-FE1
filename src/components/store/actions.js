import * as actions from "./actionTypes";

export const addTweetMiddleWare = (data) => (dispatch) => {
  dispatch({ type: actions.ADD_TWEET, data });
};
