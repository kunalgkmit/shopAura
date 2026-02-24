import { useMutation } from '@tanstack/react-query';
import { userSignUp } from '@services/auth.service';

export const useUserSignUp = () => {
  return useMutation({
    mutationFn: userSignUp,
  });
};