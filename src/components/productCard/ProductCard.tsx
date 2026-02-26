import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

export function ProductCard({ productListingData }: ProductCardProps) {
  const { id, title, image, price } = productListingData;
  return (
    <View style={styles.parentBox}>
      <TouchableOpacity>
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
