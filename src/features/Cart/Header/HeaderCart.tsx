import React, { useRef, useState } from "react";
import CartIcon from "@/assets/svg/Basket.svg";
import { useAtomValue } from "jotai";
import { cartAtom, cartTotalAtom } from "../cartAtom";
import { CartItem } from "../Item/CartItem";
import EmptyCart from "../Empty/EmptyCart";
import useOnClickOutside from "@/hooks/useClickOutside";

function HeaderShoppingCart() {
  const shoppingCartTotal = useAtomValue(cartTotalAtom);
  const cart = useAtomValue(cartAtom);
  const [open, setOpen] = useState(false);
  const shoppingCartRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(shoppingCartRef, () => setOpen(false));

  return (
    <div
      ref={shoppingCartRef}
      className="relative flex cursor-pointer  bg-cyan-800 text-white xl:hidden"
    >
      <div
        className="flex h-full w-full items-center justify-center px-6"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CartIcon />
        <span className="ml-2 text-sm font-semibold">
          ₺&nbsp;
          {shoppingCartTotal}
        </span>
      </div>
      <div
        className={`absolute -left-2 bottom-0 h-2 w-2 bg-cyan-800 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="h-full w-full cursor-default rounded-br-full bg-cyan-600" />
      </div>
      <div
        className={`absolute right-0 top-full z-20 w-72  cursor-default rounded-b border-8 border-cyan-800 bg-cyan-800 text-cyan-800 ${
          open ? "block" : "hidden"
        }`}
      >
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
