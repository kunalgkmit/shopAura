import { SET_AUTH_TOKENS } from '@store/actionTypes/authActionTypes';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_TOKENS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};
