import styles from "./Article.module.css";

function Article() {
  return (
    <div className={styles.Article}>
      <h1 className={styles.Article__title}>Article</h1>
      <p className={styles.Sub__title}>Turkeys protest as chicken elected voted "excellent".</p>
      <p>
        This is a rather thought provoking and intellectually stimulating story!
      </p>
      <button className={styles.Article__Button}>Read more!</button>
    </div>
  );
}

export default Article;
