import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '@screens/productDetails/ProductDetails';
import { ROUTES } from '@constants/routes';
import DrawerTabScreen from './DrawerNavigation';
import { Checkout } from '@screens/checkout/Checkout';
import Cart from '@screens/cart/Cart';
import { ThankYou } from '@screens/thankYou/ThankYou';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainDrawer" component={DrawerTabScreen} />
      <RootStack.Screen
        name={ROUTES.STACK.PRODUCT_DETAILS}
        component={ProductDetails}
      />
      <RootStack.Screen
        name={ROUTES.STACK.CHECKOUT}
        component={Checkout}
      />
      <RootStack.Screen name={ROUTES.STACK.CART} component={Cart}/>
      <RootStack.Screen name={ROUTES.STACK.THANK_YOU} component={ThankYou}/>
    </RootStack.Navigator>
  );
}
