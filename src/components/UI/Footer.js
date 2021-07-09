import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faVk,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <h4 className={styles.Footer__title}>Zine</h4>
      <div className={styles.Footer__content}>
        <div className={styles.Footer__content__social}>
          <Link href="https://en-gb.facebook.com/">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faFacebookSquare}
            />
          </Link>
          <Link href="https://www.instagram.com">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faInstagram}
            />
          </Link>
          <Link href="https://vk.com/?lang=ru">
            <FontAwesomeIcon className={styles.Social__icon} icon={faVk} />
          </Link>
          <Link href="https://twitter.com/?lang=en-gb">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faTwitterSquare}
            />
          </Link>
        </div>
        <div className={styles.Footer__content__statement}>
          <p className={styles.Statement__text}>
            This is very interesting text you are reading! Read more to
            understand just why it is so intersting!
          </p>
        </div>
        <div className={styles.Footer__content__sitemap}>
          <Link className={styles.Sitemap__link} to="/our-story">Our Story</Link>
          <Link className={styles.Sitemap__link} to="/contributors">Contributors</Link>
          <Link className={styles.Sitemap__link} to="/vacancies">Vavancies</Link>
          <Link className={styles.Sitemap__link} to="/our-sites">Our Sites</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
