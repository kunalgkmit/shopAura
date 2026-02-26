import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ProductsListing } from '@screens/productsListing/ProductsListing';
import { ROUTES } from '@constants/routes';

export function CategoryCard({ categoryData }: CategoryCardProps) {
  const navigation = useNavigation<StackNavProp>();

  const { id, name, image } = categoryData;

  const handleCategoryPress = () => {
    navigation.navigate(ROUTES.STACK.PRODUCT_LISTING, {
      categoryId: id,
      categoryName: name,
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.box} onPress={handleCategoryPress}>
        <Image source={{ uri: image }} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
