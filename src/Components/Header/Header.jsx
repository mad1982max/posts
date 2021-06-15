import SearchComponent from "../SearchComponent/SearchComponent";
import Burger from "../Burger/Burger";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">News App</div>
      <div className="search-wrapper">
        <SearchComponent />
      </div>
      <Burger />
    </div>
  );
};

export default Header;
