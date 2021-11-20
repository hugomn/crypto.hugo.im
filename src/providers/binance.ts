import { binanceSymbols } from "../config/coins";
import { TickerPrice } from "../config/types";

export default async function getPrices(): Promise<Array<TickerPrice>> {
  const result: Array<TickerPrice> = [];
  for (const symbol of binanceSymbols) {
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
    );
    const body = await response.json();
    result.push({ symbol, price: body.price });
  }
  return result;
}
