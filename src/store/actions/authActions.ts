import { SET_AUTH_TOKENS } from '@store/actionTypes/authActionTypes';

export const setAuthTokens = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => ({
  type: SET_AUTH_TOKENS,
  payload: {
    ...tokens,
    isLoggedIn: true,
  },
});
