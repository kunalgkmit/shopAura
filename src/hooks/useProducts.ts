import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '@services/products.service';

export const useProductsByCategory = (categoryId: number, offset: number) => {
  return useQuery({
    queryKey: ['products', categoryId, offset],
    queryFn: () => getProductsByCategory({ categoryId, pageParam: offset }),
  });
};
