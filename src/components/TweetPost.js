import "./TweetPost.css";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  MoreHorizOutlined,
  Share,
} from "@material-ui/icons";
import ReTweetIcon from "./svg/ReTweetIcon";
import AnalyticsIcon from "./svg/AnalyticsIcon";
import MyAvatar from "./MyAvatar";
import LG from "../assets/images/LG.jpg";
import hour_hourToDayConvertor from "../helper/hour_HourToDayConvertor";
import FlipMove from "react-flip-move";

const TweetPost = ({ tweetState }) => {
  return (
    <div className="tweetPostContainer">
      <FlipMove>
        {tweetState.map((tweet, i) => (
          <div key={i} className="tweetPost">
            <div className="tweetPostHeaderContainer">
              <MyAvatar src={LG} />
              <div className="tweetPostHeader">
                <h5 className="tweetPostHeaderUserName">{tweet.email}</h5>
                <div className="tweetPostHeaderUserTweetName">
                  {`@${tweet.handle}`}
                </div>
                <div className="tweetPostHeaderHour">
                  {hour_hourToDayConvertor(tweet.created_at)}
                </div>
                <div className="tweetPostHeaderMoreIcon">
                  <MoreHorizOutlined />
                </div>
              </div>
            </div>
            <div className="tweetPostHeaderDescr">{tweet.tweet_message}</div>
            <div className="tweetPostFooterIcons">
              <ChatBubbleOutline
                fontSize="small"
                className="tweetPostFooterMUIIcon tweetPostFooterChatIcon"
              />
              <ReTweetIcon />
              <FavoriteBorder
                fontSize="small"
                className="tweetPostFooterMUIIcon tweetPostFooterFavIcon"
              />
              <Share
                fontSize="small"
                className="tweetPostFooterMUIIcon tweetPostFooterShare"
              />
              <AnalyticsIcon />
            </div>
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

export default TweetPost;
