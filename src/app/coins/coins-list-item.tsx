import styles from "./assets/coins-list.module.scss";
import { trimPrice } from "./helpers";
import { CoinsListItemProps } from "../actions/types";

export default function CoinsListItem({
  market_cap_rank,
  display_symbol,
  name,
  last_price_usd,
  volume_24_usd,
  image_id,
  price_change_1D_percent,
  last_market_cap_usd,
}: CoinsListItemProps): JSX.Element {
  const icon = (
    <img
      src={`https://imagedelivery.net/4-5JC1r3VHAXpnrwWHBHRQ/${image_id}/coin64`}
      alt={display_symbol}
    />
  );

  return (
    <tr>
      <td>{market_cap_rank}</td>
      <td className={styles.name}>
        {icon}
        <div className={styles.names}>
          <span>{display_symbol}</span>
          <span>{name}</span>
        </div>
      </td>
      <td>${trimPrice(last_price_usd)}</td>
      <td>{price_change_1D_percent}%</td>
      <td>{last_market_cap_usd}</td>
      <td>{volume_24_usd}</td>
    </tr>
  );
}
