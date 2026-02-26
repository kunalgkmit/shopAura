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

  type StackScreenTypes = {
    [ROUTES.STACK.PRODUCT_LISTING]: {
      categoryName: string;
    };
    [ROUTES.STACK.PRODUCT_DETAILS]: undefined;
  };

  type DrawerNavProp = DrawerNavigationProp<DrawerTabTypes>;
  type StackNavProp = NativeStackNavigationProp<StackScreenTypes>;
}
