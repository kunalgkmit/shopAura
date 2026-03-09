import { Text, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';

export function PriceDetails() {
  const items = useSelector(state => state.cart.items);

  let totalPrice = 0;
  let platformFee = 25;
  items.forEach(item => (totalPrice += item.price * item.quantity));

  let discountOnMRP = (totalPrice * 18) / 100;
  let totalAmount = totalPrice - discountOnMRP + platformFee;

  let totalQuantity = 0;
  items.forEach(item => (totalQuantity += item.quantity));
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.priceDetailsWrapper}>
          <Text style={styles.title}>{`PRICE DETAILS (${totalQuantity} ${
            totalQuantity > 1 ? 'items' : 'item'
          })`}</Text>
        </View>
        <View style={styles.middleBox}>
          <View style={styles.rowContent}>
            <Text style={styles.subTitle}>Total MRP</Text>
            <Text style={styles.subTitle}>₹{totalPrice.toLocaleString()}</Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.subTitle}>18% Discount on MRP</Text>
            <Text style={styles.discount}>
              - ₹{discountOnMRP.toLocaleString()}
            </Text>
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.subTitle}>Platform Fee</Text>
            <Text style={styles.subTitle}>₹{platformFee}</Text>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.rowContent}>
            <Text style={styles.subTitle}>Total Amount</Text>
            <Text style={styles.subTitle}>₹{totalAmount.toLocaleString()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
