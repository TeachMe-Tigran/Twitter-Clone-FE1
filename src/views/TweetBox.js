import "./TweetBox.css";
import Avatar from "@material-ui/core/Avatar";
import LG from "../assets/images/LG.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetMiddleWare } from "../components/store/actions";

const TweetBox = () => {
  const dispatch = useDispatch();
  const [tweetMessage, setTweetMessage] = useState(``);
  const state = useSelector((state) => state.tweets);

  console.log(`STATE`, state);

  const addTweet = (e) => {
    e.preventDefault();

    const tweetData = {
      id: Math.random().toFixed(3),
      tweetMessage,
      avatar: LG,
    };

    dispatch(addTweetMiddleWare(tweetData));
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
          <button className="tweetBoxButton" onClick={(e) => addTweet(e)}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
