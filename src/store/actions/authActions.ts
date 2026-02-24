import { SET_AUTH_TOKENS } from "@store/actionTypes/authActionTypes";

export const setAuthTokens = (accessToken: string, refreshToken: string) => ({
  type: SET_AUTH_TOKENS,
  payload: {
    accessToken,
    refreshToken,
    isLoggedIn: true,
  },
});
