"use client";
import { useEffect, useState } from "react";
import styles from "./assets/coins-list.module.scss";
import { getCoins } from "../actions";
import { CoinsListItemProps } from "../actions/types";
import CoinsListItem from "./coins-list-item";
import CoinsListPlaceholder from "./coins-list-placeholder";

export default function CoinsList(): JSX.Element {
  const [coinsList, setCoinsList] = useState<Array<CoinsListItemProps>>([]);
  const [limit, setLimit] = useState(10);

  const fetchCoins = async (limit?: number) => {
    const res = await getCoins(limit);
    setCoinsList(res.data);
  };

  const handleClick = () => {
    setLimit(limit + 10);
    setCoinsList([]);
    fetchCoins(limit);
  };

  useEffect(() => {
    console.log("effect");
    fetchCoins(limit);
  }, []);

  const thList = [
    "#",
    "NAME",
    "PRICE",
    "24H CHANGE",
    "MARKET CAP",
    "24H VOLUME",
  ];

  const renderedTHs = thList.map((th: string): JSX.Element => {
    return (
      <th key={th}>
        <span>{th}</span>
      </th>
    );
  });

  const renderedTRs = coinsList.map((coin: CoinsListItemProps) => {
    return <CoinsListItem key={coin.display_symbol} {...coin} />;
  });

  const placeholder = Array(limit).fill(<CoinsListPlaceholder />);

  return (
    <div className={styles.container}>
      <table className={styles.coins}>
        <thead>
          <tr>{renderedTHs}</tr>
        </thead>
        <tbody>{coinsList.length ? renderedTRs : placeholder}</tbody>
      </table>
      <div className={styles.load_more}>
        <button onClick={handleClick}>Load More</button>
      </div>
    </div>
  );
}
