import styles from "./Footer.module.css";
import Link from "react-router-dom";

function Footer() {
  return (
    <div className={styles.Footer}>
      <h4 className={styles.Footer__title}>Zine</h4>
      <div className={styles.Footer__content}>
        <div className={styles.Footer__content__social}>
          <Link href="https://en-gb.facebook.com/">Facebook</Link>
          <Link href="https://vk.com/?lang=ru">ВКонтакте</Link>
          <Link href="https://www.instagram.com">Instagram</Link>
          <Link href="https://twitter.com/?lang=en-gb">Twitter</Link>
        </div>
        <div className={styles.Footer__content__social}>
          <p>
            This is very interesting text you are reading! Read more to
            understand just why it is so intersting!
          </p>
        </div>
        <div className={styles.Footer__content__sitemap}>
          <Link to="/our-story">Our Story!</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
