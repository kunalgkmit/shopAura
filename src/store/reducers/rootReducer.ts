import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { wishlistReducer } from './wishlistReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
});
