import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '@store/actions/cartActions';
import Toast from 'react-native-toast-message';
import { QuantityManager } from '@components/quantityManager';
import { addToWishlist } from '@store/actions/wishlistActions';

export function CartCard({ cartListingItem }: CartCardProps) {
  const dispatch = useDispatch();
  const { id, title, image, price, quantity } = cartListingItem;

  const handleAddToCart = () => {
    dispatch(increaseQuantity(id));
  };

  const handleRemoveFromCart = () => {
    if (quantity > 1) dispatch(decreaseQuantity(id));
  };

  const handleDelete = () => dispatch(removeFromCart(id));

  const handleMoveToWishlist = () => {
    dispatch(addToWishlist(cartListingItem));
    dispatch(removeFromCart(id));
    Toast.show({
      type: 'success',
      text1: 'Moved to Wishlist',
      text2: title,
      visibilityTime: 2000,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.parentBox}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.price}>₹{price}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          ></View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={handleMoveToWishlist}>
              <Text style={styles.actionText}>Move to Wishlist</Text>
            </TouchableOpacity>
            <Text style={styles.divider}>|</Text>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
        <QuantityManager id={id} quantity={quantity} />
      </View>
    </View>
  );
}
