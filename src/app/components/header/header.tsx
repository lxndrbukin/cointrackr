import styles from './assets/header.module.scss';
import HeaderSearch from './header-search';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://img.icons8.com/?size=512&id=tL4HcqvaoJn7&format=png"
            alt="CoinTrackr"
          />
          <span>CoinTrackr</span>
        </div>
        <ul className={styles.nav}>
          <li>ALL COINS</li>
          <li>PORTFOLIO</li>
        </ul>
        <HeaderSearch />
        <div className={styles.menu}>
          <button>Sign In</button>
        </div>
      </div>
    </header>
  );
}
