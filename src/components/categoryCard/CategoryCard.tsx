import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function CategoryCard({ categoryData }: CategoryCardProps) {
  const { id, name, image } = categoryData;
  return (
    <View>
      <TouchableOpacity style={styles.box}>
        <Image source={{ uri: image }} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
