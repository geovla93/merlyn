import { useMemo, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  cartItemsState,
  totalCartAmountState,
  totalCartItemsState,
} from '@/atoms/cart';
import { CartItem } from '@/types';

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const useCart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const totalAmount = useRecoilValue(totalCartAmountState);
  const totalItems = useRecoilValue(totalCartItemsState);

  const addItem = useCallback(
    (item: CartItem) => {
      const currentCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (i) => i.name === item.name,
      );
      const existingItem = currentCartItems[existingItemIndex];
      let newCartItems: CartItem[];

      if (existingItemIndex >= 0) {
        newCartItems = replaceItemAtIndex(currentCartItems, existingItemIndex, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: existingItem.totalPrice + item.price,
        });
      } else {
        newCartItems = [...currentCartItems, item];
      }

      setCartItems(newCartItems);
    },
    [cartItems, setCartItems],
  );

  const removeItem = useCallback(
    (itemName: string) => {
      const currentCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex((i) => i.name === itemName);
      const existingItem = currentCartItems[existingItemIndex];
      let newCartItems: CartItem[];

      if (existingItemIndex < 0) {
        newCartItems = currentCartItems;
      } else if (existingItem.quantity === 1) {
        newCartItems = removeItemAtIndex(currentCartItems, existingItemIndex);
      } else {
        newCartItems = replaceItemAtIndex(currentCartItems, existingItemIndex, {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          totalPrice: existingItem.totalPrice - existingItem.price,
        });
      }

      setCartItems(newCartItems);
    },
    [cartItems, setCartItems],
  );

  const values = useMemo(
    () => ({ cartItems, totalAmount, totalItems, addItem, removeItem }),
    [addItem, cartItems, removeItem, totalAmount, totalItems],
  );

  return { ...values };
};

export default useCart;
