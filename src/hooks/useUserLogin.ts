import { useMutation } from '@tanstack/react-query';
import { userLogin } from '@services/auth.service';
import { store } from '@store/store';
import { setAuthTokens } from '@store/actions/authActions';

export const useUserLogin = () => {
  return useMutation({
    mutationFn: userLogin,
    onSuccess: data =>
      store.dispatch(setAuthTokens(data.access_token, data.refresh_token)),
  });
};
