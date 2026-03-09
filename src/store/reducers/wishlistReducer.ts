import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '@store/actionTypes/wishlistActionTypes';

const initialState: { items: ProductListing[] } = {
  items: [],
};

export const wishlistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
