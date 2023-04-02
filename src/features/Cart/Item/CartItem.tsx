import ProductCounter from "@/features/Product/Counter/ProductCounter";
import { CartItemType } from "../cartAtom";

interface CartItemProps {
  product: CartItemType;
  divider?: React.ReactNode;
}

export function CartItem({
  product,
  divider = <hr className={"mt-4 w-full"} />,
}: CartItemProps) {
  return (
    <div>
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
    </div>
  );
}
