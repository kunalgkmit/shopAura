import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ROUTES } from '@constants/routes';

declare global {
  type DrawerTabTypes = {
    [ROUTES.DRAWER.HOME]: undefined;
    [ROUTES.DRAWER.MY_WISHLIST]: undefined;
    [ROUTES.DRAWER.CART]: undefined;
    [ROUTES.DRAWER.LOGOUT]: undefined;
  };

  type DrawerNavProp = DrawerNavigationProp<DrawerTabTypes>;
}
