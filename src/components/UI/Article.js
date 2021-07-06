import styles from "./Article.module.css";

function Article() {
  return (
    <div className={styles.Article}>
      <div className={styles.Article__content}>
        <h1 className={styles.Article__title}>Cold Turkey</h1>
        <p>
          <strong>Turkeys</strong> protest as chickens <em>exempt</em> from "
          <u>tax-bill</u>".
        </p>
        <p className={styles.Article__date}>06 July 21'</p>
        <button className={styles.Article__button}>Read more!</button>
      </div>

      <div>
        <p className={styles.Article__favourite}>&#9825;</p>
      </div>
    </div>
  );
}

export default Article;
