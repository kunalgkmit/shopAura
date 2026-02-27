import { SET_AUTH_TOKENS, SET_PROFILE } from '@store/actionTypes/authActionTypes';

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

export const setProfile = (profile: UserProfileProps) => ({
  type: SET_PROFILE,
  payload: profile,
});
