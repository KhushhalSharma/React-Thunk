import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/Posts/posts.action";

const Posts = () => {
  const posts = useSelector((post) => {
    return post.postsManager.posts;
  });
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost);
  }, []);

  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
