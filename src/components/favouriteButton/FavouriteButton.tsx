import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@react-native-vector-icons/ionicons';
import {
  addToWishlist,
  removeFromWishlist,
} from '@store/actions/wishlistActions';
import { COLORS } from '@constants/colors';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';

export function FavouriteButton({ product, size = 23 }: FavouriteButtonProps) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    item => Number(item.id) === Number(product.id),
  );

  const handleToggle = () => {
    console.log('ID GOT>>>', product.id)
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.container}>
      <Ionicons
        name={isWishlisted ? 'heart' : 'heart-outline'}
        size={size}
        color={isWishlisted ? COLORS.RED : COLORS.RED}
      />
    </TouchableOpacity>
  );
}
