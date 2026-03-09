import Ionicons from '@react-native-vector-icons/ionicons';
import { decreaseQuantity, increaseQuantity } from '@store/actions/cartActions';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { COLORS } from '@constants/colors';

export function QuantityManager({ id, quantity }: QuantityManagerProps) {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseQuantity(id));
  const handleDecrease = () => {
    if (quantity > 1) dispatch(decreaseQuantity(id));
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name="remove-outline"
        onPress={handleDecrease}
        size={20}
        disabled={quantity === 1}
        color={COLORS.BG_CARD}
      />
      <Text style={styles.quantity}>{quantity}</Text>
      <Ionicons
        name="add"
        onPress={handleIncrease}
        size={20}
        color={COLORS.BG_CARD}
      />
    </View>
  );
}
