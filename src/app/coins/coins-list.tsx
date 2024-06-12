import styles from './assets/coins-list.module.scss';
import { getCoins } from '../actions';
import CoinsListItem from './coins-list-item';
import Coin from './page';

export default async function CoinsList(): Promise<JSX.Element> {
  const coins = await getCoins();

  const thList = [
    '#',
    'NAME',
    'PRICE',
    '24H CHANGE',
    'MARKET CAP',
    '24H VOLUME',
  ];

  const renderedTHs = thList.map((th: string): JSX.Element => {
    return (
      <th key={th}>
        <span>{th}</span>
      </th>
    );
  });

  const renderedTRs = coins.data.slice(0, 11).map((coin) => {
    return <CoinsListItem key={coin.display_symbol} {...coin} />;
  });

  return (
    <table className={styles.coins}>
      <thead>
        <tr>{renderedTHs}</tr>
      </thead>
      <tbody>{renderedTRs}</tbody>
    </table>
  );
}
