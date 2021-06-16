import { useParams } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../../context";

import "./post.css";

const Post = () => {
  const { posts } = useContext(PostsContext);
  console.log("posts", posts);
  const { id } = useParams();
  return <div className="post-wrapper">Post: {id}</div>;
};

export default Post;
