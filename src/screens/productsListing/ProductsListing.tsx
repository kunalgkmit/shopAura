import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProductCard } from '@components/productCard';
import { CustomAppBar } from '@components/customAppBar';
import { useProductsByCategory } from '@hooks/useProducts';
import { styles } from './styles';

const LIMIT = 10;

export function ProductsListing() {
  const route = useRoute<RouteProp<StackScreenTypes>>();

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isFetching } = useProductsByCategory(offset);

  useEffect(() => {
    if (!data) return;
    if (data.length < LIMIT) setHasMore(false);
    setProducts(prev => [...prev, ...data]);
  }, [data]);

  const handleEndReached = () => {
    if (!isFetching && hasMore) {
      setOffset(prev => prev + LIMIT);
    }
  };

  return (
    <>
      <CustomAppBar title={route.params?.categoryName} />
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={products}
          renderItem={({ item }) => <ProductCard productListingData={item} />}
          onEndReached={handleEndReached}
        />
      </View>
    </>
  );
}
