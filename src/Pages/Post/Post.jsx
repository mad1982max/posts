import { useParams } from "react-router-dom";
import { useContext } from "react";
import PostsContext from "../../context";
import "./post.css";

const Post = () => {
  const { initPosts } = useContext(PostsContext);
  const { id } = useParams();
  const post = initPosts.find((item) => item.id === id);
  return (
    <div className="single-post-card">
      <div className="post-id">
        Post ID: <span>{id}</span>
      </div>
      <div className="title">{post.webTitle}</div>
    </div>
  );
};

export default Post;
