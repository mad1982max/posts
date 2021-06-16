import { useEffect, useState } from "react";
import { useContext } from "react";
import PostsContext from "../../context";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { loadPosts } from "../../services/api/postsApi";
import Loader from "../../Components/Loader/Loader";
import "./posts.css";

const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await loadPosts();
        setPosts(result.data.response.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    //fetchData();
  }, [setPosts]);
  return (
    <div className="posts-wrapper">
      {isLoading && <Loader />}
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
