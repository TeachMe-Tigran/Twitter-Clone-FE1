import "./AddTweetBox.css";
import LG from "../assets/images/LG.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../store/actions";
import MyAvatar from "./MyAvatar";

const AddTweetBox = () => {
  const dispatch = useDispatch();
  const [tweetMessage, setTweetMessage] = useState(``);

  const addTweetHandler = async (e) => {
    e.preventDefault();

    const tweetData = {
      id: Math.random().toFixed(3),
      tweetMessage,
      tweetTime: new Date().getTime(),
    };

    dispatch(addTweet(tweetData));
    setTweetMessage(``);
  };

  return (
    <div className="tweetBoxContainer inputBox">
      <div className="tweetBoxInputContainer inputBox">
        <MyAvatar src={LG} />
        <input
          type="text"
          maxLength="140"
          value={tweetMessage}
          className="tweetInput"
          placeholder="What's happening?"
          onChange={(e) => setTweetMessage(e.target.value)}
        />
        <div>
          {!tweetMessage ? (
            <button disabled={!tweetMessage} className="disableTweetBoxButton">
              Tweet
            </button>
          ) : (
            <button
              disabled={!tweetMessage}
              onClick={(e) => addTweetHandler(e)}
            >
              Tweet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTweetBox;
