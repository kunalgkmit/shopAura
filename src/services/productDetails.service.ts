import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getProductById = async (productId: number) => {
  const { data } = await axiosInstance.get(
    `${ENDPOINTS.CATEGORIES.GET_PRODUCTS}/${productId}`,
  );
  return data;
};
