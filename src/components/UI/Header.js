import { NavLink, Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav>
        <header className={styles.Header}>
          <h3><Link className={styles.Header__title} to="/">Zine</Link></h3>

          <ul className={styles.Header__navigation}>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/latest"
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
                to="/trending"
              >
                Trending
              </NavLink>
            </li>
            <li className={styles.Navigation__link}>
              <NavLink
                className={styles.Navigation__link}
                activeClassName={styles.Navigation__link__active}
                to="/recent"
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
