import { useParams } from "react-router-dom";
import "./post.css";

const Post = () => {
  let { id } = useParams();
  return <div className="post-wrapper">Post: {id}</div>;
};

export default Post;
