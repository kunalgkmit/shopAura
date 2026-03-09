import { FlatList, Text, View } from 'react-native';
import { CustomAppBar } from '@components/customAppBar';
import { CartCard } from '@components/cartCard';
import { useSelector } from 'react-redux';
import { EmptyContainer } from '@components/emptyComponent';
import { styles } from './styles';
import CustomButton from '@components/customButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PriceDetails } from '@components/priceDetails';

export default function Cart() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();

  const items = useSelector(state => state.cart.items);

  let totalPrice = 0;
  let platformFee = 25;
  items.forEach(item => (totalPrice += item.price * item.quantity));

  let discountOnMRP = (totalPrice * 18) / 100;
  let totalAmount = totalPrice - discountOnMRP + platformFee;

  const handleCheckout = () => {
    navigation.push(ROUTES.STACK.CHECKOUT);
  };

  return (
    <>
      <CustomAppBar title="Cart" showDrawer={route.name !== 'StackCart'} />
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={EmptyContainer}
          data={items}
          renderItem={({ item }) => <CartCard cartListingItem={item} />}
          ListFooterComponent={items.length > 0 ? PriceDetails : null}
          ListFooterComponentStyle={{ marginTop: 20, marginBottom: 10 }}
        />
        {items.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalAmount}>Total Amount</Text>
              <Text style={styles.price}>₹{totalAmount.toLocaleString()}</Text>
            </View>
            <View style={{ width: '50%' }}>
              <CustomButton title="Checkout" onPress={handleCheckout} />
            </View>
          </View>
        )}
      </View>
    </>
  );
}
