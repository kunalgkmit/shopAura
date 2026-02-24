import { useMutation } from '@tanstack/react-query';
import { userLogin } from '@services/auth.service';

export const useUserLogin = () => {
  return useMutation({
    mutationFn: userLogin,
  });
};
