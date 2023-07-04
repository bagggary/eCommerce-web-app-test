import { CART_ACTION_TYPE, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import {
  withMatcher,
  Action,
  ActionWithPayload,
  createAction,
} from "../../util/reducer/reducer.util";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cardItem) => cardItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CategoryItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type setIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPE.SET_IS_CART_OPEN,
  boolean
>;

export type setCartItems = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((bool: boolean): setIsCartOpen => {
  return { type: CART_ACTION_TYPE.SET_IS_CART_OPEN, payload: bool };
});

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): setCartItems => {
    return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: cartItems };
  }
);

export const addCartItems = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): setCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  // updateCartItemsReducer(newCartItems);
  // return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };
  return setCartItems(newCartItems);
};
export const removeItemToCart = (
  cartItems: CartItem[],
  cartItemToRemove: CategoryItem
): setCartItems => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  // updateCartItemsReducer(newCartItems);
  // return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };s
  return setCartItems(newCartItems);
};
export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CategoryItem
): setCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  // updateCartItemsReducer(newCartItems);
  // return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems };
  return setCartItems(newCartItems);
};
