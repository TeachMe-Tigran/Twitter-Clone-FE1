import "./addTweetBox.css";
import Avatar from "@material-ui/core/Avatar";
import LG from "../../assets/images/LG.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../../store/actions";
// import { addTweet } from "../store/actions";

const AddTwittBox = () => {
  const dispatch = useDispatch();
  const [tweetMessage, setTweetMessage] = useState(``);

  const addTweetHandler = (e) => {
    e.preventDefault();

    const tweetData = {
      id: Math.random().toFixed(3),
      tweetMessage,
      avatar: LG,
    };

    dispatch(addTweet(tweetData));
    setTweetMessage(``);
  };

  return (
    <div className="tweetBoxContainer inputBox">
      <div className="tweetBoxInputContainer inputBox">
        <Avatar alt="user" src={LG} className="tweetAvatar" />
        <input
          type="text"
          maxLength="140"
          value={tweetMessage}
          className="tweetInput"
          placeholder="What's happening?"
          onChange={(e) => setTweetMessage(e.target.value)}
        />
        <div>
          <button
            className="tweetBoxButton"
            onClick={(e) => addTweetHandler(e)}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTwittBox;
