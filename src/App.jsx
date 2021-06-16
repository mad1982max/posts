import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Posts from "./Pages/Posts/Posts";
import Footer from "./Components/Footer/Footer";
import Post from "./Pages/Post/Post";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id*" component={Post} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
