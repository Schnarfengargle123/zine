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
      <h4>
        <Link className={styles.Footer__title} to="/">Zine</Link>
      </h4>
      <div className={styles.Footer__content}>
        <div className={styles.Footer__content__social}>
          <a href="https://en-gb.facebook.com/">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faFacebookSquare}
            />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faInstagram}
            />
          </a>
          <a href="https://vk.com/?lang=ru">
            <FontAwesomeIcon className={styles.Social__icon} icon={faVk} />
          </a>
          <a href="https://twitter.com/?lang=en-gb">
            <FontAwesomeIcon
              className={styles.Social__icon}
              icon={faTwitterSquare}
            />
          </a>
        </div>
        <div className={styles.Footer__content__statement}>
          <p className={styles.Statement__text}>
            This is very interesting text you are reading!
            <br />
            <br /> Read more to understand just why it is so interesting!
          </p>
        </div>
        <div className={styles.Footer__content__sitemap}>
          <Link className={styles.Sitemap__link} to="/our-story">
            Our Story
          </Link>
          <Link className={styles.Sitemap__link} to="/contributors">
            Contributors
          </Link>
          <Link className={styles.Sitemap__link} to="/vacancies">
            Vacancies
          </Link>
          <Link className={styles.Sitemap__link} to="/our-sites">
            Our Sites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
