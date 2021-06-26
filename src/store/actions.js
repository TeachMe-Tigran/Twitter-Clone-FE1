import * as actions from "./actionTypes";
import axios from "axios";
import { REACT_APP_API_URL } from "../helper/baseURL";

export const addTweet = (data) => (dispatch) => {
  dispatch({ type: actions.ADD_TWEET, data });
};

export const fetchTweets = (start, limit) => async (dispatch) => {
  try {
    const result = await axios.get(`${REACT_APP_API_URL}${"api/products"}`);
    dispatch({ type: actions.FETCH_TWEETS_SUCCESS, result });
  } catch (error) {
    dispatch({
      type: actions.FETCH_TWEETS_FAIL,
      payload: {
        error: `🚫 Failed to fetch data !`,
      },
    });
  }
};
