import * as actions from "./actionTypes";

const initialState = {
  tweetPostsState: [],
  isLoading: false,
  errorMessage: null,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TWEET: {
      let resetData = {
        ...action.data,
      };
      return {
        ...state,
        tweetPostsState: [...state.tweetPostsState, resetData],
      };
    }
    case actions.FETCH_TWEETS_SUCCESS: {
      return {
        ...state,
        tweetPostsState: [...state.tweetPostsState, ...action.result.data],
        isLoading: true,
      };
    }
    case actions.FETCH_TWEETS_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: alert(action.payload.error),
      };
    }
    default:
      return state;
  }
};

export default tweetReducer;
