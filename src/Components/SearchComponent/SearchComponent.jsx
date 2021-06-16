import { useState } from "react";
import { useContext } from "react";
import PostsContext from "../../context";
import "./searchComponent.css";

const SearchComponent = () => {
  const { initPosts, setFilteredPosts } = useContext(PostsContext);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search) {
      const filteredArr = initPosts.filter((post) =>
        post.webTitle.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filteredArr);
    } else {
      setFilteredPosts([]);
    }
  };

  const clearSearch = () => {
    setFilteredPosts(initPosts);
    setSearch("");
  };

  return (
    <>
      <div className="search-wrapper">
        <input type="text" onChange={handleChange} value={search} />
      </div>
      <button onClick={handleSearch} className="btn search">
        SEARCH
      </button>
      <button onClick={clearSearch} className="btn clear">
        CLEAR
      </button>
    </>
  );
};

export default SearchComponent;
