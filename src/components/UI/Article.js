// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Article.module.css";

function Article(props) {
  return (
    <div className={styles.Article}>
      <div className={styles.Article__content}>
        <h1 className={styles.Article__title}>{props.title}</h1>
        <p className={styles.Article__blurb}>{props.blurb}</p>
        <p className={styles.Article__date}>{props.date}</p>
        <button className={styles.Article__button}>Read more!</button>
      </div>

      {/* <div>
        <p className={styles.Article__favourite}>
          <FontAwesomeIcon icon={faHeart} />
        </p>
      </div> */}
    </div>
  );
}

export default Article;

{
  /* <div className={styles.Article}>
      <div className={styles.Article__content}>
        <h1 className={styles.Article__title}>Cold Turkey</h1>
        <p className={styles.Article__blurb}>
          <strong>Turkeys</strong> protest as chickens <em>exempt</em> from "
          <u>tax-bill</u>".
        </p>
        <p className={styles.Article__date}>06 July 21'</p>
        <button className={styles.Article__button}>Read more!</button>
      </div>

      {/* <div>
        <p className={styles.Article__favourite}>
          <FontAwesomeIcon icon={faHeart} />
        </p>
      </div> 
    </div> */
}
