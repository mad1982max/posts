import { useHistory } from "react-router";
import dateTransformToString from "../../services/dateTransform";
import "./singlePost.css";

const SinglePost = ({ post }) => {
  const history = useHistory();
  // console.log(post);
  const redirectToPost = (e, id) => {
    history.push({
      pathname: `/post/${id}`,
    });
  };
  const dateToShow = dateTransformToString(post.webPublicationDate);

  return (
    <div key={post.id} className="post-card">
      <div className="post-card-inner">
        <div className="post-image" onClick={(e) => redirectToPost(e, post.id)}>
          <img src={post.fields.thumbnail} alt="thumbnail-post" />
        </div>
        <div className="post-title" onClick={(e) => redirectToPost(e, post.id)}>
          {post.webTitle}
        </div>
        <div className="post-main">{post.fields.bodyText.slice(0, 200)}...</div>
        <div className="post-card-footer">
          <div className="date">{dateToShow}</div>
          <div className="link">Read more</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
