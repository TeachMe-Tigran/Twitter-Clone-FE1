import * as actions from "./actionTypes";

const initialState = {};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TWEET: {
      const { id } = action.data;
      let resetData = {
        ...state,
        [id]: action.data,
      };
      return resetData;
    }
    default:
      return state;
  }
};

export default tweetReducer;
