import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getUserProfile = async (userId: number) => {
  const { data } = await axiosInstance.get(
    `${ENDPOINTS.AUTH.USER_PROFILE}/${userId}`,
  );
  return {
    name: data.name,
    email: data.email,
    avatar: data.avatar,
  };
};
