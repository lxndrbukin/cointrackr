import styles from "./assets/coins-list.module.scss";

export default function CoinsListPlaceholder(): JSX.Element {
  return (
    <tr>
      <td>
        <div></div>
      </td>
      <td className={styles.name_placeholder}>
        <div className={styles.icon}></div>
        <div className={styles.names}>
          <span></span>
          <span></span>
        </div>
      </td>
      <td>
        <div className={styles.number_placeholder}>
          <span></span>
        </div>
      </td>
      <td>
        <div className={styles.number_placeholder}>
          <span></span>
        </div>
      </td>
      <td>
        <div className={styles.number_placeholder}>
          <span></span>
        </div>
      </td>
      <td>
        <div className={styles.number_placeholder}>
          <span></span>
        </div>
      </td>
    </tr>
  );
}
