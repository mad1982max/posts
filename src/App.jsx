import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
import Post from "./Pages/Post/Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
