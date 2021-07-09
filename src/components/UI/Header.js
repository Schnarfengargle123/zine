import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav>
        <header className={styles.Header}>
          <h1 className={styles.Header__title}>Zine</h1>

          <ul className={styles.Header__navigation}>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/topics"
              >
                Latest
              </NavLink>
            </li>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/topics"
              >
                Topics
              </NavLink>
            </li>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/topics"
              >
                Trending
              </NavLink>
            </li>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/topics"
              >
                Recent
              </NavLink>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default Header;
