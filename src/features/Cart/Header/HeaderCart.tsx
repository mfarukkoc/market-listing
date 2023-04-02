import React from "react";
import CartIcon from "@/assets/svg/Basket.svg";
import { useAtomValue } from "jotai";
import { cartAtom, cartTotalAtom } from "../cartAtom";
import { CartItem } from "../Item/CartItem";
import EmptyCart from "../Empty/EmptyCart";

function HeaderShoppingCart() {
  const shoppingCartTotal = useAtomValue(cartTotalAtom);
  const cart = useAtomValue(cartAtom);

  return (
    <div className="group relative flex h-full items-center justify-center bg-cyan-800 px-6 text-white xl:hidden">
      <CartIcon />
      <span className="ml-2 text-sm font-semibold">
        ₺&nbsp;
        {shoppingCartTotal}
      </span>
      <div className="absolute -left-2 bottom-0 hidden h-2 w-2 bg-cyan-800 group-focus-within:block group-hover:block">
        <div className="h-full w-full rounded-br-full bg-cyan-600"></div>
      </div>
      <div className="absolute right-0 top-full hidden w-72 border-8 border-cyan-800 bg-cyan-800 text-cyan-800 group-focus-within:block group-hover:block">
        <div className="flex flex-col gap-4 rounded bg-white p-4">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {cart.map((cartItem, index) => (
                <CartItem
                  key={cartItem.slug}
                  product={cartItem}
                  divider={index === cart.length - 1 ? null : undefined}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderShoppingCart;
