import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '@constants/colors';
import { ROUTES } from '@constants/routes';
import { removeFromWishlist } from '@store/actions/wishlistActions';
import { styles } from './styles';

export function WishlistCard({ productListingData }: ProductCardProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { id, title, image, price } = productListingData;
  const handlePress = () => {
    navigation.push(ROUTES.STACK.PRODUCT_DETAILS, {
      productId: id,
    });
  };

  const handleRemove = () => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.parentBox}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.contentWrapper}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.price}>₹{price}</Text>
            </View>

            <View style={styles.iconWrapper}>
              <Ionicons
                name="trash"
                size={30}
                color={COLORS.RED}
                onPress={handleRemove}
              />
              <Ionicons
                name="cart-outline"
                size={25}
                style={styles.cartIcon}
                color={COLORS.BG_CARD}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
