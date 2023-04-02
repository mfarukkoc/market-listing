import type { NextApiRequest, NextApiResponse } from "next";

import items from "@/assets/json/items.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const tags = new Set();
    items.forEach((item) => {
      item.tags.forEach((tag) => {
        tags.add(tag);
      });
    });

    res.status(200).json(Array.from(tags));
  }
  res.status(404);
}
