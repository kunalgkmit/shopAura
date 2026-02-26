import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

export function ProductCard({ productListingData }: ProductCardProps) {
  const navigation = useNavigation<StackNavProp>();

  const { id, title, image, price } = productListingData;

  const handleCategoryPress = () => {
    navigation.push(ROUTES.STACK.PRODUCT_DETAILS, { productId: id });
  };

  return (
    <View style={styles.parentBox}>
      <TouchableOpacity onPress={handleCategoryPress}>
        <View style={styles.childBox}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.contentWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.price}>₹{price}</Text>
            </View>
            <Ionicons
              name="cart-outline"
              size={25}
              style={styles.cartIcon}
              color={COLORS.BG_CARD}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
