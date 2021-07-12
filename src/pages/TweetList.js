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
  const { tweetPostsState, error } = useSelector((state) => state.tweets);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!tweetPostsState.length) {
      // do initial fetch
    }
  }, [tweetPostsState]);

  useEffect(() => {
    if (!error) {
      dispatch(fetchTweets(tweetPostsState.length, 20));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const fetchMoreData = () => {
    if (tweetPostsState.length >= 50) {
      setHasMore(false);
      return;
    }
    dispatch(fetchTweets(tweetPostsState.length, 10));
  };

  return (
    <div className="tweetListContainer">
      {error ? (
        <p>something went wrong...</p>
      ) : (
        <InfiniteScroll
          dataLength={tweetPostsState.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={!error && <CircularProgress />}
          endMessage={<HaveSeenAll />}
        >
          <TweetPost tweetState={tweetPostsState} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default TweetList;
