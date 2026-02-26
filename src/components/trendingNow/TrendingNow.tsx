import { FlatList, Text, View } from 'react-native';
import { ProductCard } from '@components/productCard';
import { useProductsByCategory } from '@hooks/useProducts';
import { styles } from './styles';

export function TrendingNow() {
  const { data: products, isFetching } = useProductsByCategory(1);
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Trending Now</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={({ item }) => <ProductCard productListingData={item} />}
      />
    </View>
  );
}
