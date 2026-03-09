import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';
import { mapCategory } from '@utils/helpers';

export const getCategories = async () => {
  const { data } = await axiosInstance.get(ENDPOINTS.CATEGORIES.GET_CATEGORIES);
  return mapCategory(data);
};
