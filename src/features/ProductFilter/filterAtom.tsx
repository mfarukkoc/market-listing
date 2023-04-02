import { getProductsProps } from "@/services";
import { atom } from "jotai";

export const filterAtom = atom<getProductsProps>({
  sort: "PRICE_ASC",
  page: 1,
});

export const brandsAtom = atom(
  (get) => get(filterAtom).brands || [],
  (get, set, brands: getProductsProps["brands"]) => {
    const filter = get(filterAtom);
    set(filterAtom, { ...filter, brands });
  }
);

export const tagsAtom = atom(
  (get) => get(filterAtom).tags || [],
  (get, set, tags: getProductsProps["tags"]) => {
    const filter = get(filterAtom);
    set(filterAtom, { ...filter, tags });
  }
);

export const itemTypeAtom = atom(
  (get) => get(filterAtom).itemType,
  (get, set, itemType: getProductsProps["itemType"]) => {
    const filter = get(filterAtom);
    set(filterAtom, { ...filter, itemType });
  }
);

export const sortAtom = atom(
  (get) => get(filterAtom).sort,
  (get, set, sort: getProductsProps["sort"]) => {
    const filter = get(filterAtom);
    set(filterAtom, { ...filter, sort });
  }
);

export const pageAtom = atom(
  (get) => get(filterAtom).page,
  (get, set, page: getProductsProps["page"]) => {
    const filter = get(filterAtom);
    set(filterAtom, { ...filter, page });
  }
);
