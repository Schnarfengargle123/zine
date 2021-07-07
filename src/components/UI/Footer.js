import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <h4 className={styles.Footer__title}>Zine</h4>
      <div className={styles.Footer__content}>
        <div className={styles.Footer__content__social}></div>
        <div className={styles.Footer__content__social}></div>
        <div className={styles.Footer__content__sitemap}></div>
      </div>
    </div>
  );
}

export default Footer;
