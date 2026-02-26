import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getProductsByCategory = async ({
  pageParam = 0,
}: {
  pageParam: number;
}) => {
  const { data } = await axiosInstance.get(
    `${ENDPOINTS.CATEGORIES.GET_PRODUCTS}?limit=10&offset=${pageParam}`,
  );
  return data.map(
    ({
      id,
      title,
      images,
      price,
    }: {
      id: number;
      title: string;
      images: string[];
      price: number;
    }) => ({
      id,
      title,
      image: images[0],
      price,
    }),
  );
};
