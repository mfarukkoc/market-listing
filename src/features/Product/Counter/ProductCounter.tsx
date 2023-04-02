import Counter from "@/components/Counter/Counter";
import { addToCartAtom, removeFromCartAtom } from "@/features/Cart/cartAtom";
import { ProductType } from "@/types/product";
import { useSetAtom } from "jotai";
import React from "react";

interface ProductCounterProps {
  quantity: number;
  product: ProductType;
}

const ProductCounter = ({ quantity, product }: ProductCounterProps) => {
  const addToCart = useSetAtom(addToCartAtom);
  const removeFromCart = useSetAtom(removeFromCartAtom);
  return (
    <Counter
      count={quantity}
      onChange={(count) => {
        if (count > quantity) {
          addToCart(product);
        } else {
          removeFromCart(product);
        }
      }}
    />
  );
};

export default ProductCounter;
