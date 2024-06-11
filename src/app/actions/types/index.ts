export type CoinsListItemProps = {
  market_cap_rank: number;
  display_symbol: string;
  name: string;
  last_price_usd: number;
  volume_24_usd: number;
  image_id: string;
  price_change_1D_percent: number;
  last_market_cap_usd: number;
};

export type CoinsListProps = {
  data: Array<CoinsListItemProps>;
};
