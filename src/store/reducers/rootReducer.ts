import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { wishlistReducer } from './wishlistReducer';
import { profileReducer } from './profileReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  profile: profileReducer,
  cart: cartReducer,
});
