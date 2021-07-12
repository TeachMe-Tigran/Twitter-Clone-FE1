import * as actions from "./actionTypes";

const initialState = {
  tweetPostsState: [],
  isLoading: false,
  error: null,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TWEET:
      return {
        ...state,
        error: null,
        tweetPostsState: [...action.payload, ...state.tweetPostsState],
      };

    case actions.FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        tweetPostsState: [...state.tweetPostsState, ...action.result.data],
        isLoading: true,
      };

    case actions.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default tweetReducer;
