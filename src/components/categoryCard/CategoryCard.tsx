import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@constants/colors';
import { ROUTES } from '@constants/routes';
import { styles } from './styles';

export function CategoryCard({ categoryData }: CategoryCardProps) {
  const { name, icon, color } = categoryData;

  const navigation = useNavigation<StackNavProp>();

  const handleCategoryPress = () => {
    navigation.navigate(ROUTES.STACK.PRODUCT_LISTING, {
      categoryName: name,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.box, { backgroundColor: color }]}
        onPress={handleCategoryPress}
      >
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={30} color={COLORS.BG_CARD} />
        </View>
        <Text style={styles.categoryName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
