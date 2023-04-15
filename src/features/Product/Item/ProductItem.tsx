import Button from "@/components/Button/Button";
import { addToCartAtom, cartCountAtom } from "@/features/Cart/cartAtom";
import { ProductType } from "@/types/product";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import ProductCounter from "../Counter/ProductCounter";
import { motion, AnimatePresence } from "framer-motion";

interface ProductItemProps {
  product: ProductType;
  quantity?: number;
}

function ProductItem({ product }: ProductItemProps) {
  const quantitites = useAtomValue(cartCountAtom);
  const addToCart = useSetAtom(addToCartAtom);

  const quantity = quantitites.get(product.slug);
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg border border-gray-200 p-4">
        <div className="aspect-square w-full bg-gray-300" />
      </div>
      <div className="mb-auto flex flex-col">
        <span className="text-sm font-bold text-cyan-600">
          ₺ {product.price}
        </span>
        <span className="text-sm font-semibold">{product.name}</span>
      </div>
      <div className="flex justify-center" style={{ willChange: "transform" }}>
        <motion.div
          className={"rounded"}
          initial={quantity ? "counter" : "button"}
          animate={quantity ? "counter" : "button"}
          variants={{
            counter: {
              width: "auto",
              background: "#fff",
            },
            button: {
              width: "100%",
              background: "var(--cyan-600)",
            },
          }}
        >
          {quantity ? (
            <ProductCounter quantity={quantity} product={product} />
          ) : (
            <Button fluid onClick={() => addToCart(product)}>
              Add
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProductItem;
