import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '@screens/productDetails/ProductDetails';
import { ROUTES } from '@constants/routes';
import DrawerTabScreen from './DrawerNavigation';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainDrawer" component={DrawerTabScreen} />
      <RootStack.Screen
        name={ROUTES.STACK.PRODUCT_DETAILS}
        component={ProductDetails}
      />
    </RootStack.Navigator>
  );
}
