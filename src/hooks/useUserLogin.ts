import { useMutation } from '@tanstack/react-query';
import { userLogin } from '@services/auth.service';
import store from '@store';
import { setAuthTokens, setProfile } from '@store/actions/authActions';
import { getUserProfile } from '@services/profile.service';

export const useUserLogin = () => {
  return useMutation({
    mutationFn: userLogin,
    onSuccess: async data => {
      store.dispatch(
        setAuthTokens({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        }),
      );
      const profile = await getUserProfile(data.id);
      store.dispatch(setProfile(profile));
    },
  });
};
