import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '@constants/routes';
import Cart from '@screens/cart/Cart';
import Home from '@screens/home/Home';
import Mywishlist from '@screens/myWishlist/Mywishlist';

const Drawer = createDrawerNavigator<DrawerTabTypes>();

export default function DrawerTabScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.DRAWER.HOME} component={Home} />
      <Drawer.Screen name={ROUTES.DRAWER.MY_WISHLIST} component={Mywishlist} />
      <Drawer.Screen name={ROUTES.DRAWER.CART} component={Cart} />
    </Drawer.Navigator>
  );
}
