import * as actions from "./actionTypes";
import axios from "axios";
import { axiosWithAuth } from "../helper/axiosWithAuth";
import { REACT_APP_API_URL } from "../helper/baseURL";

export const addTweet = (data) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().post(
      `${REACT_APP_API_URL}${"api/tweets/create"}`,
      data
    );
    dispatch({ type: actions.ADD_TWEET, payload: result.data.data });
  } catch (error) {
    console.log(`error`);
  }
};

export const fetchTweets = (start, limit) => async (dispatch) => {
  try {
    const result = await axiosWithAuth().get(
      `${REACT_APP_API_URL}${"api/tweets/getAll"}`
    );
    dispatch({ type: actions.FETCH_TWEETS_SUCCESS, result });
  } catch (error) {
    dispatch({
      type: actions.ERROR,
      payload: {
        error: `🚫 Failed to fetch data !`,
      },
    });
  }
};

export const sendLoginFormData = (data, history) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${REACT_APP_API_URL}${"api/auth/login"}`,
      data
    );
    localStorage.setItem(`token`, result.data.token);
    dispatch({ type: actions.LOGIN_SUCCESS });
    history.push("/home");
  } catch (error) {
    console.log(error);
  }
};
