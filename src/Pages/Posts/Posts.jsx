import { useEffect, useState } from "react";
import { useContext } from "react";
import PostsContext from "../../context";
import SinglePost from "../../Components/SinglePost/SinglePost";
import { loadPosts } from "../../services/api/postsApi";
import Loader from "../../Components/Loader/Loader";
import Message from "../../Components/Message/Message";
import "./posts.css";

const Posts = () => {
  const { filteredPosts, setInitPosts, setFilteredPosts } =
    useContext(PostsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnchorVisible, setIsAnchorVisible] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 200) {
      setIsAnchorVisible(true);
    } else {
      setIsAnchorVisible(false);
    }
  };

  const toTop = () => {
    setIsAnchorVisible(false);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await loadPosts();
        const posts = result.data.response.results;
        setInitPosts(posts);
        setFilteredPosts(posts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setFilteredPosts, setInitPosts]);
  return (
    <>
      <div className="posts-wrapper">
        {filteredPosts.length === 0 ? (
          <Message type="error" msg="Sorry, we have no posts!" />
        ) : (
          filteredPosts.map((post) => <SinglePost key={post.id} post={post} />)
        )}
      </div>

      {isLoading && <Loader />}

      {isAnchorVisible && (
        <div className="top-anchor" onClick={toTop}>
          TO TOP
        </div>
      )}
    </>
  );
};

export default Posts;
