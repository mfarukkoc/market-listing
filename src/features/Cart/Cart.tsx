import { useAtomValue } from "jotai";
import React from "react";
import { cartAtom, cartTotalAtom } from "./cartAtom";
import { CartItem } from "./Item/CartItem";
import EmptyCart from "./Empty/EmptyCart";
function Cart() {
  const cart = useAtomValue(cartAtom);
  const cartTotal = useAtomValue(cartTotalAtom);
  return (
    <div className="hidden h-fit w-80 shrink-0 rounded border-8 border-cyan-600 bg-cyan-600 xl:block">
      <div className="flex h-fit w-full flex-col gap-4 rounded bg-white p-4">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cart.map((product) => (
              <CartItem key={product.slug} product={product} />
            ))}
            <div className="ml-auto w-fit rounded border-2 border-cyan-600 px-6 py-4 text-sm font-bold text-cyan-600 ">
              ₺{cartTotal}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
