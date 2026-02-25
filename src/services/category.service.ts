import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getCategories = async () => {
  const { data } = await axiosInstance.get(ENDPOINTS.CATEGORIES.GET_CATEGORIES);
  return data
    .slice(0, 5)
    .map(
      ({ id, name, image }: { id: number; name: string; image: string }) => ({
        id,
        name,
        image,
      }),
    );
};
