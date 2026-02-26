import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@services/productDetails.service';

export const useProductDetailsById = (productId: number) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
  });
};
