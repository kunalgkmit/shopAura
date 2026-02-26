import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { CategoryCard } from '@components/categoryCard';
import { CATEGORIES } from '@constants/constants';
import { styles } from './styles';

export function Categories() {
  // getCategories hook call
  // const { data: categories, isPending } = useCategories();

  const renderCategory = useCallback(
    ({ item }: { item: Category }) => (
      <CategoryCard key={item.id} categoryData={item} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
      </View>
      <View style={styles.listWrapper}>
        {CATEGORIES.map(item => renderCategory({ item }))}
      </View>
    </View>
  );
}
