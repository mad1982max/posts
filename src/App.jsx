import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
import Footer from "./Components/Footer/Footer";
import Post from "./Pages/Post/Post";
import PostsContext from "./context";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="app">
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Router basename="/">
          <Header />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/post/:id*" component={Post} />
          </Switch>
          <Footer />
        </Router>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
