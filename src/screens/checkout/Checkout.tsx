import { CustomAppBar } from '@components/customAppBar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { PriceDetails } from '@components/priceDetails';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTES } from '@constants/routes';
import CustomButton from '@components/customButton';
import { clearCart } from '@store/actions/cartActions';
import { useState } from 'react';
import { PAYMENT_METHODS } from '@constants/constants';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '@constants/colors';

export function Checkout() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selectedPayment, setSelectedPayment] = useState('');

  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  let totalPrice = 0;
  items.forEach(item => (totalPrice += item.price * item.quantity));

  const handlePlaceOrder = () => {
    if (!selectedPayment) return;
    dispatch(clearCart());
    navigation.push(ROUTES.STACK.THANK_YOU);
  };
  return (
    <>
      <CustomAppBar title="Checkout" />
      <View style={styles.container}>
        <PriceDetails />
        <View style={styles.paymentWrapper}>
          <Text style={styles.paymentTitle}>Select Payment Method</Text>
          {PAYMENT_METHODS.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.paymentOption,
                selectedPayment === method.id && styles.selectedOption,
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <Ionicons
                name={method.icon}
                size={22}
                color={COLORS.TEXT_PRIMARY}
              />
              <Text style={styles.paymentLabel}>{method.label}</Text>
              <Ionicons
                name={
                  selectedPayment === method.id
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={22}
                color={
                  selectedPayment === method.id
                    ? COLORS.SHADOW
                    : COLORS.TEXT_TERTIARY
                }
                style={styles.radioIcon}
              />
            </TouchableOpacity>
          ))}
          <CustomButton title="Place Order" onPress={handlePlaceOrder} />
        </View>
      </View>
    </>
  );
}
