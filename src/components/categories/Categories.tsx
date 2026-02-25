import { FlatList, Text, View } from 'react-native';
import { CategoryCard } from '@components/categoryCard';
import { useCategories } from '@hooks/useCategories';
import { styles } from './styles';

export function Categories() {
  const { data: categories, isPending } = useCategories();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          numColumns={2}
          data={categories}
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CategoryCard categoryData={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
