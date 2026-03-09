import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '@constants/routes';
import Cart from '@screens/cart/Cart';
import Mywishlist from '@screens/myWishlist/Mywishlist';
import CustomDrawer from '@components/customDrawer';
import StackNavigator from './StackNavigation';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

export default function DrawerTabScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen name={ROUTES.DRAWER.HOME} component={StackNavigator} />
      <Drawer.Screen name={ROUTES.DRAWER.MY_WISHLIST} component={Mywishlist} />
      <Drawer.Screen name={ROUTES.DRAWER.CART} component={Cart} />
    </Drawer.Navigator>
  );
}
