import { useAtomValue } from "jotai";
import React from "react";
import { cartAtom, cartTotalAtom } from "./cartAtom";
import { CartItem } from "./Item/CartItem";
import EmptyCart from "./Empty/EmptyCart";
import { motion, AnimatePresence } from "framer-motion";
import ResizeablePanel from "@/components/ResizeablePanel/ResizeablePanel";
function Cart() {
  const cart = useAtomValue(cartAtom);
  const cartTotal = useAtomValue(cartTotalAtom);
  return (
    <div className="hidden h-fit w-80 shrink-0 rounded border-8 border-cyan-600 bg-cyan-600 xl:block">
      <ResizeablePanel className="overflow-hidden rounded bg-white">
        <motion.div
          key={cart.length === 0 ? "empty" : "filled"}
          className="relative flex h-full w-full flex-col gap-4 rounded bg-white p-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <AnimatePresence>
                {cart.map((product) => (
                  <CartItem
                    key={product.slug}
                    product={product}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    exit={{ opacity: 0 }}
                  />
                ))}
              </AnimatePresence>
              <div className="ml-auto w-fit rounded border-2 border-cyan-600 px-6 py-4 text-sm font-bold text-cyan-600 ">
                ₺{cartTotal}
              </div>
            </>
          )}
        </motion.div>
      </ResizeablePanel>
    </div>
  );
}

export default Cart;
