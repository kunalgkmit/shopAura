import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/home/Home';
import { ProductsListing } from '@screens/productsListing/ProductsListing';
import { ROUTES } from '@constants/routes';

const Stack = createNativeStackNavigator<StackScreenTypes>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.STACK.HOME} component={Home} />
      <Stack.Screen
        name={ROUTES.STACK.PRODUCT_LISTING}
        component={ProductsListing}
      />
      <Stack.Screen
        name={ROUTES.STACK.PRODUCT_DETAILS}
        component={ProductsListing}
      />
    </Stack.Navigator>
  );
}
