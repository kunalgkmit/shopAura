import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '@store/actionTypes/wishlistActionTypes';

export const addToWishlist = (product: ProductListing) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId: number) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
