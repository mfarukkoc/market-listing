import { useCallback, useMemo, useState } from "react";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import ArrowRight from "@/assets/svg/ArrowRight.svg";
import clsx from "clsx";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const [dots, setDots] = useState({ left: false, right: false });

  const getPageNumbers = useCallback(() => {
    let pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        setDots({ left: false, right: true });
      } else if (currentPage >= totalPages - 2) {
        setDots({ left: true, right: false });
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        setDots({ left: true, right: true });

        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const pageNumbers = useMemo(() => getPageNumbers(), [getPageNumbers]);

  return (
    <div className="flex items-center justify-center text-sm font-semibold text-gray-500">
      <button
        className="mx-2 flex items-center gap-2 rounded-md p-3 transition-colors hover:text-cyan-600 disabled:cursor-not-allowed disabled:text-gray-400"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft /> Prev
      </button>

      {dots.left && (
        <>
          <button
            className="mx-2 rounded-md p-3 transition-colors hover:text-cyan-600"
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
          <span className="mx-2">..</span>
        </>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={clsx(`mx-2 rounded-md p-3 transition-colors`, {
            "hover:text-cyan-600": page !== currentPage,
            "bg-cyan-600 text-white hover:bg-cyan-500": page === currentPage,
          })}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      {dots.right && (
        <>
          <span className="mx-2">..</span>
          <button
            className="mx-2 rounded-md p-3 transition-colors hover:text-cyan-600"
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className="mx-2 flex items-center gap-2 rounded-md p-3  transition-colors hover:text-cyan-600 disabled:cursor-not-allowed disabled:text-gray-400"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
