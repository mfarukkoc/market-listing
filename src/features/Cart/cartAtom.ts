import { ProductType } from "@/types/product";
import { atom } from "jotai";

export interface CartItemType extends ProductType {
  quantity: number;
}

const _cartAtom = atom<CartItemType[]>([]);
const _cartCountAtom = atom<Map<string, number>>(new Map());

export const cartAtom = atom((get) => get(_cartAtom));
export const cartCountAtom = atom((get) => {
  const val = get(_cartCountAtom);
  return val;
});

export const cartTotalAtom = atom((get) => {
  const cart = get(_cartAtom);
  const total = cart.reduce(
    (prev, cur) => (prev += cur.price * cur.quantity),
    0
  );
  return total.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
});

export const addToCartAtom = atom(null, (get, set, product: ProductType) => {
  const cart = get(_cartAtom);
  const cartCount = get(_cartCountAtom);

  const updatedCart = [...cart];
  const updatedCartCount = new Map(cartCount);

  const cartItemIndex = updatedCart.findIndex(
    (item) => item.slug === product.slug
  );
  if (cartItemIndex !== -1) {
    const quantity = updatedCart[cartItemIndex].quantity + 1;

    updatedCart[cartItemIndex].quantity = quantity;
    updatedCartCount.set(product.slug, quantity);
  } else {
    updatedCart.push({ ...product, quantity: 1 });
    updatedCartCount.set(product.slug, 1);
  }

  set(_cartAtom, updatedCart);
  set(_cartCountAtom, updatedCartCount);
});

export const removeFromCartAtom = atom(
  null,
  (get, set, product: ProductType) => {
    const cart = get(_cartAtom);
    const cartCount = get(_cartCountAtom);

    const updatedCart = [...cart];
    const updatedCartCount = new Map(cartCount);

    const cartItemIndex = updatedCart.findIndex(
      (item) => item.slug === product.slug
    );
    if (cartItemIndex === -1) {
      return;
    } else {
      const quantity = updatedCart[cartItemIndex].quantity;
      if (quantity > 1) {
        const quantity = updatedCart[cartItemIndex].quantity - 1;
        updatedCart[cartItemIndex].quantity = quantity;
        updatedCartCount.set(product.slug, quantity);
      } else {
        updatedCart.splice(cartItemIndex, 1);
        updatedCartCount.delete(product.slug);
      }
    }

    set(_cartAtom, updatedCart);
    set(_cartCountAtom, updatedCartCount);
  }
);
