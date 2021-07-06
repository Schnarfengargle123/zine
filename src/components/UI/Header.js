import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Zine</h1>
    </header>
  );
}

export default Header;
