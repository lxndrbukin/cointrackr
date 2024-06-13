"use server";
import axios from "axios";
import { CoinsListProps } from "./types";

const api = axios.create({
  baseURL: "https://coincodex.com/api/v1/",
});

export async function getCoins(limit?: number): Promise<CoinsListProps> {
  const res = await api.get("/coins_compat/get_coin_list", {
    params: {
      limit,
    },
  });
  return res.data;
}

export async function getCoin(coin: string) {
  const res = await api.get(`/coins_compat/get_coin/${coin}`, {
    params: {
      limit: 10,
    },
  });
  return res.data;
}

export async function search(query: string) {
  const res = await api.get("/search", {
    params: {
      compat: true,
      search: query,
      limit: 5,
    },
  });
  return res.data;
}
