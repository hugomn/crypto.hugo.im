import { binanceSymbols, coingeckoCoins } from "../config/coins";
import { TickerPrice } from "../config/types";

export default async function getPrices(): Promise<Array<TickerPrice>> {
  const result: Array<TickerPrice> = [];
  const ids = coingeckoCoins.map((coin) => coin.id).join(",");
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=eur`
  );
  const body = await response.json();
  coingeckoCoins.forEach((coin) => {
    result.push({ symbol: `${coin.symbol}EUR`, price: body[coin.id].eur });
  });
  return result;
}
