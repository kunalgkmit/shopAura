import { FlatList, Text, View } from 'react-native';
import { CategoryCard } from '@components/categoryCard';
import { CATEGORIES } from '@constants/constants';
import { styles } from './styles';

export function Categories() {
  // getCategories hook call
  // const { data: categories, isPending } = useCategories();
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
      <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          numColumns={3}
          data={CATEGORIES}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CategoryCard categoryData={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
