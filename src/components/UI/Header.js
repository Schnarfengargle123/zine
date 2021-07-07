import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./Header.module.css";
import Topics from "../../routes/Topics";

function Header() {
  return (
    <Router>
      <div>
        <nav>
          <header className={styles.Header}>
            <h1 className={styles.Header__title}>Zine</h1>
          </header>
          <ul className={styles.Header__navigation}>
            <li>
              <Link className={styles.Navigation__link} to="/topics">
                Topics
              </Link>
            </li>
          </ul>
        </nav>
        {/* <Switch>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default Header;
