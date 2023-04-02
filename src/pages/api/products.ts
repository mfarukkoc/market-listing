import type { NextApiRequest, NextApiResponse } from "next";

import items from "@/assets/json/items.json";

export const sortOptions = [
  "PRICE_ASC",
  "PRICE_DESC",
  "DATE_DESC",
  "DATE_ASC",
] as const;
export type sortOptionsType = (typeof sortOptions)[number];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    let result = [...items];
    const itemType = req.query.itemType || undefined;
    const sort = req.query.sort || undefined;
    let manufacturers = req.query.brands || [];
    let tags = req.query.tags || [];
    const page = Array.isArray(req.query.page)
      ? 1
      : parseInt(req.query.page || "1");

    result = result.filter((item) => {
      // itemType filter
      if (itemType) {
        if (item.itemType !== itemType) {
          return false;
        }
      }

      // manufacturer filter
      if (manufacturers.length > 0) {
        if (!Array.isArray(manufacturers)) {
          manufacturers = manufacturers.split(",");
        }
        if (!manufacturers.includes(item.manufacturer)) {
          return false;
        }
      }

      // tag filter
      if (tags.length > 0) {
        if (!Array.isArray(tags)) {
          tags = tags.split(",");
        }
        const hasSelectedTag = item.tags.some((tag) => {
          return tags.includes(tag);
        });

        if (!hasSelectedTag) {
          return false;
        }
      }

      return true;
    });

    if (
      !Array.isArray(sort) &&
      sort &&
      sortOptions.includes(sort as sortOptionsType)
    ) {
      result.sort((a, b) => {
        let sortResult: number = 0;
        switch (sort as sortOptionsType) {
          case "DATE_ASC":
            sortResult = a.added - b.added;
            break;
          case "DATE_DESC":
            sortResult = b.added - a.added;
            break;
          case "PRICE_ASC":
            sortResult = a.price - b.price;
            break;
          case "PRICE_DESC":
            sortResult = b.price - a.price;
            break;
        }
        return sortResult;
      });
    }

    res.status(200).json({
      data: result.slice((page - 1) * 16, page * 16),
      totalCount: result.length,
    });
  }
  res.status(404);
}
