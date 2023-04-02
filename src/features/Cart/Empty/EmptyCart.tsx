import React from "react";
import Basket from "@/assets/svg/Basket.svg";

function EmptyCart() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-cyan-600">
      <Basket className="h-24 w-auto" />
      <span className="mt-2 text-lg font-semibold">Your basket is empty</span>
      <span className="mt-1 text-center text-sm text-gray-500">
        Add product(s) to your basket to place an order.
      </span>
    </div>
  );
}

export default EmptyCart;
