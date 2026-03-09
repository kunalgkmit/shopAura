import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from '@store/actionTypes/cartActionTypes';

export const addToCart = (item: CartItemPayload) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const increaseQuantity = (id: number) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id: number) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
