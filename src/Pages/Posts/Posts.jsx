import { useEffect, useState } from "react";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { loadPosts } from "../../services/api/postsApi";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await loadPosts();
        setPosts(result.data.response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="posts-wrapper">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
