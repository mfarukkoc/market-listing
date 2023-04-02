import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import { useAtom } from "jotai";
import { pageAtom } from "../filterAtom";

interface ProductPaginationProps {
  totalPages: number;
}
function ProductPagination({ totalPages }: ProductPaginationProps) {
  const [page, setPage] = useAtom(pageAtom);
  return (
    <Pagination
      currentPage={page || 1}
      onPageChange={setPage}
      totalPages={totalPages}
    />
  );
}

export default ProductPagination;
