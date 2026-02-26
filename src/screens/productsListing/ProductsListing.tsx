import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CustomAppBar } from '@components/customAppBar';
import { useProductsByCategory } from '@hooks/useProducts';
import { ProductCard } from '@components/productCard';

const LIMIT = 10;

export function ProductsListing() {
  const navigation = useNavigation<StackNavProp>();

  const route = useRoute<RouteProp<StackScreenTypes>>();

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isFetching } = useProductsByCategory(
    route.params?.categoryId,
    offset,
  );
  useEffect(() => {
    console.log('WE GOT DATA>>', data);
    if (!data) return;
    if (data.length < LIMIT) setHasMore(false);
    setProducts(prev => [...prev, ...data]);
  }, [data]);
  return (
    <>
      <CustomAppBar title={route.params?.categoryName} />
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={({ item }) => <ProductCard />}
        />
      </View>
    </>
  );
}
