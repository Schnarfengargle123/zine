import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "../App";

function Topics() {
  return (
    <Router>
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
          <Route path="/">
            <App />
          </Route>
      </div>
    </Router>
  );
}

export default Topics;
