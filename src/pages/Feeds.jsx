import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getFeed from "../Redux/Feeds/feeds.action";
const Feeds = () => {
  const feeds = useSelector((store) => {
    return store.feedsManager.feed;
  });
  console.log(feeds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed);
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
