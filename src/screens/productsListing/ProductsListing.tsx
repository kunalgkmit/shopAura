import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CustomAppBar } from '@components/customAppBar';
import { useProductsByCategory } from '@hooks/useProducts';
import { ProductCard } from '@components/productCard';
import { styles } from './styles';

const LIMIT = 10;

export function ProductsListing() {
  const navigation = useNavigation<StackNavProp>();

  const route = useRoute<RouteProp<StackScreenTypes>>();

  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data, isFetching } = useProductsByCategory(offset);
  useEffect(() => {
    console.log('WE GOT DATA>>', data);
    if (!data) return;
    if (data.length < LIMIT) setHasMore(false);
    setProducts(prev => [...prev, ...data]);
  }, [data]);
  return (
    <>
      <CustomAppBar title={route.params?.categoryName} />
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          data={data}
          renderItem={({ item }) => <ProductCard productListingData={item} />}
        />
      </View>
    </>
  );
}
