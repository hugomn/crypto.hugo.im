export type Coin = {
  id: string;
  symbol: string;
};

export const binanceSymbols = [
  "BTCEUR",
  "ADABTC",
  "ATOMBTC",
  "COTIBTC",
  "DOTBTC",
  "ETHBTC",
  "LINKBTC",
  "SOLBTC",
  "SHIBEUR",
  "VETEUR",
  "LUNAEUR",
];

export const coingeckoCoins: Coin[] = [
  { id: "cardano", symbol: "ADA" },
  { id: "cosmos", symbol: "ATOM" },
  { id: "avalanche-2", symbol: "AVAX" },
  { id: "bitcoin", symbol: "BTC" },
  { id: "coti", symbol: "COTI" },
  { id: "polkadot", symbol: "DOT" },
  { id: "ethereum", symbol: "ETH" },
  { id: "fantom", symbol: "FTM" },
  { id: "chainlink", symbol: "LINK" },
  { id: "terra-luna", symbol: "LUNA" },
  { id: "render-token", symbol: "RNDR" },
  { id: "thorchain", symbol: "RUNE" },
  { id: "shiba-inu", symbol: "SHIB" },
  { id: "solana", symbol: "SOL" },
  { id: "tether", symbol: "USDT" },
  { id: "vechain", symbol: "VET" },
  { id: "wilder-world", symbol: "WILD" },
];
