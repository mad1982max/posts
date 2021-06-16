import { useHistory } from "react-router";
import SearchComponent from "../SearchComponent/SearchComponent";
import Burger from "../Burger/Burger";
import "./header.css";

const Header = () => {
  const history = useHistory();
  const redirectToHome = () => {
    history.push("/");
  };
  return (
    <div className="header-wrapper">
      <div className="logo" onClick={redirectToHome}>
        News App
      </div>
      <div className="search-wrapper">
        <SearchComponent />
      </div>
      <Burger />
    </div>
  );
};

export default Header;
