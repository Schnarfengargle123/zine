import styles from "./Article.module.css";

function Article() {
  return (
    <div className={styles.Article}>
      <h1 className={styles.Article__title}>Cold Turkey</h1>
      <p>
        Turkeys protest as chickens exempt from "
        <span className={styles.Sub__title}>tax bill</span>".
      </p>
      <p className={styles.Article__date}>06 June 21</p>
      {/* <p>
        This is a rather thought provoking and intellectually stimulating story!
      </p> */}
      <button className={styles.Article__button}>Read more!</button>
    </div>
  );
}

export default Article;
