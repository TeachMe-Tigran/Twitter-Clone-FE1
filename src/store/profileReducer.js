import * as actions from "./actionTypes";

import BG from "../assets/images/bg.jpg";
import LG from "../assets/images/LG.jpg";

const initialState = {
  name: "Lusine Ghalechyan",
  nick: "@LusineGhalechyan11",
  joined: "June 2021",
  following: 0,
  followers: 0,
  bgPhoto: BG,
  profilePhoto: LG,
  twitts: [
    {
      text: "Twitt about Nature",
    },
    {
      text: "Twitt about Music",
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case actions.ADD_TWEET: {
  //       const { id } = action.data;
  //       let resetData = {
  //         ...state,
  //         [id]: action.data,
  //       };
  //       return resetData;
  //     }
  //     default:
  //       return state;
  //   }
  return state;
};

export default profileReducer;
