import type { NextApiRequest, NextApiResponse } from "next";

type TickerPrice = {
  symbol: string;
  price: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TickerPrice[]>
) {
  const symbols = [
    "BTCEUR",
    "ADABTC",
    "ATOMBTC",
    "COTIBTC",
    "DOTBTC",
    "ETHBTC",
    "LINKBTC",
    "SOLBTC",
    "SHIBEUR",
  ];
  const result: Array<TickerPrice> = [];
  for (const symbol of symbols) {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    );
    const body = await response.json();
    result.push({ symbol, price: body.price });
  }
  res.status(200).json(result);
}
