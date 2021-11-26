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
  { id: "bitcoin", symbol: "BTC" },
  { id: "cardano", symbol: "ADA" },
  { id: "cosmos", symbol: "ATOM" },
  { id: "coti", symbol: "COTI" },
  { id: "polkadot", symbol: "DOT" },
  { id: "ethereum", symbol: "ETH" },
  { id: "fantom", symbol: "FTM" },
  { id: "chainlink", symbol: "LINK" },
  { id: "terra-luna", symbol: "LUNA" },
  { id: "render-token", symbol: "RNDR" },
  { id: "shiba-inu", symbol: "SHIB" },
  { id: "solana", symbol: "SOL" },
  { id: "vechain", symbol: "VET" },
  { id: "wilder-world", symbol: "WILD" },
];
