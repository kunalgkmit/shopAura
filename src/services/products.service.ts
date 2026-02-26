import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';

export const getProductsByCategory = async ({
  categoryId,
  pageParam = 0,
}: {
  categoryId: number;
  pageParam: number;
}) => {
  const { data } = await axiosInstance.get(
    `${ENDPOINTS.CATEGORIES.GET_CATEGORIES}${categoryId}/products?limit=10&offset=${pageParam}`,
  );
  return data.map(
    ({
      id,
      title,
      images,
    }: {
      id: number;
      title: string;
      images: string[];
    }) => ({
      id,
      title,
      image: images[0],
    }),
  );
};
