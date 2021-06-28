import "./TweetList.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import TweetPost from "../components/TweetPost";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchTweets } from "../store/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import HaveSeenAll from "../components/HaveSeenAll";

const TweetList = () => {
  const dispatch = useDispatch();
  const tweetState = useSelector((state) => state.tweets.tweetPostsState);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchTweets(tweetState.length, 20));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = () => {
    if (tweetState.length >= 50) {
      setHasMore(false);
      return;
    }
    dispatch(fetchTweets(tweetState.length, 10));
  };

  return (
    <div className="tweetListContainer">
      <InfiniteScroll
        dataLength={tweetState.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<CircularProgress />}
        endMessage={<HaveSeenAll />}
      >
        <TweetPost tweetState={tweetState} />
      </InfiniteScroll>
    </div>
  );
};

export default TweetList;
