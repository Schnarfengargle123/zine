import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/UI/Header";
import Article from "./components/UI/Article";
import Footer from "./components/UI/Footer";

import Topics from "./routes/Topics";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Article />
        <Footer />
        <Switch>
          <Route path="/topics">
            {" "}
            {/* Change "/topics" to "/", see what happens */}
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
