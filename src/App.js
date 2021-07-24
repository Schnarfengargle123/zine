import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Latest from "./pages/navigation/Latest.js";
import Recent from "./pages/navigation/Recent.js";
import Topics from "./pages/navigation/Topics.js";
import Trending from "./pages/navigation/Trending.js";

import Header from "./components/UI/Header";
import Article from "./components/UI/Article.js";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Items nested within routes do not have their flexbox properties applied, i.e., not centering */}
        <Switch>
          {/* <Route component={Article} exact path="/" /> */}
          {/* I only work with exact path when placed as first route */}
          {/* <Route component={Latest} path="/latest" /> */}
          <Route exact path="/">
            <Article title="Cold Turkey" />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/recent">
            <Recent />
          </Route>
          {/* <Route path="/">
            <Article />
          </Route> */}
          {/* <Route component={Article} path="/" />  */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
