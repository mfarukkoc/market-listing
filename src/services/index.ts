import { sortOptionsType } from "@/pages/api/products";
import { ProductType } from "@/types/product";

export interface getProductsProps {
  itemType?: ProductType["itemType"];
  sort?: sortOptionsType;
  brands?: string[];
  tags?: string[];
  page?: number;
}

export interface GetProductsResponse {
  data: ProductType[];
  totalCount: number;
}

export async function getProducts(params?: getProductsProps) {
  params ??= {};

  const paramsObject = {
    itemType: params.itemType,
    sort: params.sort,
    brands: params.brands?.join(","),
    tags: params.tags?.join(","),
    page: params.page?.toString(),
  };

  const queryParams = Object.entries(paramsObject)
    .reduce((result, [key, value]) => {
      return value
        ? result.concat(
            encodeURIComponent(key) + "=" + encodeURIComponent(value)
          )
        : result;
    }, [] as string[])
    .join("&");

  return fetch("/api/products?" + queryParams).then((res) =>
    res.json()
  ) as Promise<GetProductsResponse>;
}

export interface BrandType {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

export async function getBrands() {
  return fetch("/api/brands").then((res) => res.json()) as Promise<BrandType[]>;
}

export type TagType = string;
export async function getTags() {
  return fetch("/api/tags").then((res) => res.json()) as Promise<TagType[]>;
}
