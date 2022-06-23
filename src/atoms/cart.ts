import { atom, selector } from 'recoil';
import { CartItem } from '@/types';

export const cartItemsState = atom<CartItem[]>({
  key: 'cartItemsState',
  default: [],
});

export const totalCartItemsState = selector({
  key: 'totalCartItemsState',
  get: ({ get }) => get(cartItemsState).length,
});

export const totalCartAmountState = selector({
  key: 'TotalCartAmountState',
  get: ({ get }) =>
    get(cartItemsState).reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    ),
});
