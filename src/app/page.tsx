import styles from "./assets/home.module.scss";
import CoinsList from "./coins/coins-list";

export default function Home(): JSX.Element {
  return (
    <section className="section">
      <div className="table-container">
        <CoinsList />
      </div>
    </section>
  );
}
