import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '@services/products.service';

export const useProductsByCategory = ( offset: number) => {
  return useQuery({
    queryKey: ['products', offset],
    queryFn: () => getProductsByCategory({ pageParam: offset }),
  });
};
