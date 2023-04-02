import { getProducts } from "@/services";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductItem from "../Item/ProductItem";
import TypesFilter from "@/features/ProductFilter/Filters/TypesFilter";
import { useAtomValue } from "jotai";
import { filterAtom } from "@/features/ProductFilter/filterAtom";
import Spinner from "@/components/Spinner/Spinner";
import Button from "@/components/Button/Button";
import ProductPagination from "@/features/ProductFilter/Filters/Pagination";
import Modal from "@/components/Modal/Modal";
import SortingFilter from "@/features/ProductFilter/Filters/SortingFilter";
import BrandsFilter from "@/features/ProductFilter/Filters/BrandsFilter";
import TagsFilter from "@/features/ProductFilter/Filters/TagFilter";

function ProductContainer() {
  const filter = useAtomValue(filterAtom);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { filter }],
    queryFn: () => getProducts(filter),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPages = Math.ceil((products?.totalCount || 0) / 16);

  return (
    <div className="flex w-full flex-col gap-4">
      <span className="text-xl text-gray-500">Products</span>
      <div className={"flex gap-4"}>
        <TypesFilter />
        <span className={"lg:hidden"}>
          <Button theme={"secondary"} onClick={() => setIsModalOpen(true)}>
            Filters & Sort
          </Button>
        </span>
      </div>
      <div
        className="grid w-full auto-cols-max grid-flow-row
    grid-cols-[repeat(2,_minmax(128px,_1fr))]
    gap-x-6 gap-y-5 bg-white p-5 sm:grid-cols-[repeat(4,_minmax(128px,_1fr))]"
      >
        {isLoading && (
          <div className="col-span-full flex h-full w-full justify-center p-16">
            <Spinner />
          </div>
        )}
        {!isLoading && totalPages === 0 && (
          <div className="col-span-full flex h-full w-full justify-center p-16">
            <span className="text-lg font-semibold text-cyan-600">
              No matching product with filters
            </span>
          </div>
        )}
        {products?.data.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
      {!isLoading && totalPages !== 0 && (
        <ProductPagination totalPages={totalPages} />
      )}
      <Modal
        title={
          <h3 className="text-lg font-semibold text-gray-600">
            Filters & Sort
          </h3>
        }
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className={"flex max-h-[70vh] flex-col gap-8 overflow-auto"}>
          <SortingFilter />
          <BrandsFilter />
          <TagsFilter />
        </div>
      </Modal>
    </div>
  );
}

export default ProductContainer;
