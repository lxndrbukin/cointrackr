"use server";
import axios from "axios";
import { CoinsListItemProps, CoinsListProps } from "./types";

const api = axios.create({
  baseURL: "https://coincodex.com/api/v1/coins_compat/",
});

export async function getCoins(): Promise<CoinsListProps> {
  const res = await api.get("/get_coin_list");
  return res.data;
}

export async function getCoin(coin: string) {
  const res = await api.get(`/get_coin/${coin}`, {
    params: {
      limit: 10,
    },
  });
  return res.data;
}
