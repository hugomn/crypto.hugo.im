import type { NextApiRequest, NextApiResponse } from "next";
import { TickerPrice } from "../../src/config/types";
import getPrices from "../../src/providers/coingecko";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TickerPrice[]>
) {
  const result = await getPrices();
  res.status(200).json(result);
}
