import type { NextApiRequest, NextApiResponse } from "next";

import companies from "@/assets/json/companies.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    res.status(200).json(companies);
  }
  res.status(404);
}
