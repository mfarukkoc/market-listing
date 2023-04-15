import ProductCounter from "@/features/Product/Counter/ProductCounter";
import { CartItemType } from "../cartAtom";
import { HTMLMotionProps, motion } from "framer-motion";

type CartItemProps = {
  product: CartItemType;
  divider?: React.ReactNode;
} & React.PropsWithChildren<HTMLMotionProps<"div">>;

export function CartItem({
  product,
  divider = <hr className={"mt-4 w-full"} />,
  ...rest
}: CartItemProps) {
  return (
    <motion.div className="h-max flex-shrink-0" {...rest}>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{product.name}</span>
          <span className="mt-2 text-sm font-bold text-cyan-600">
            ₺{product.price}
          </span>
        </div>
        <div className="my-auto w-fit">
          <ProductCounter product={product} quantity={product.quantity} />
        </div>
      </div>
      {divider}
    </motion.div>
  );
}
