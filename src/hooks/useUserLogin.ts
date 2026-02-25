import { useMutation } from '@tanstack/react-query';
import { userLogin } from '@services/auth.service';
import store from '@store';
import { setAuthTokens } from '@store/actions/authActions';

export const useUserLogin = () => {
  return useMutation({
    mutationFn: userLogin,
    onSuccess: data =>
      store.dispatch(
        setAuthTokens({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        }),
      ),
  });
};
