import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Ionicons from '@react-native-vector-icons/ionicons';

import { ROUTES } from '@constants/routes';
import { ICONS } from '@constants/constants';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

const DRAWER_ICONS = {
  [ROUTES.DRAWER.HOME]: {
    active: ICONS.HOME,
    inactive: ICONS.HOME_OUTLINE,
  },
  [ROUTES.DRAWER.MY_WISHLIST]: {
    active: ICONS.HEART,
    inactive: ICONS.HEART_OUTLINE,
  },
  [ROUTES.DRAWER.CART]: {
    active: ICONS.CART,
    inactive: ICONS.CART_OUTLINE,
  },
};

export default function CustomDrawer({
  state,
  navigation,
}: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.buttonTextWrapper}>
          {/* temporary data for profile*/}

          <View style={styles.profileImageWrapper}>
            <Ionicons name="person" color={COLORS.BG_CARD} size={25} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Sample User</Text>
            <Text style={styles.text}>sample@gmail.com</Text>
          </View>
        </View>
      </View>

      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const iconName = isFocused
          ? DRAWER_ICONS[item.name]?.active
          : DRAWER_ICONS[item.name]?.inactive;
        const color = isFocused ? COLORS.SHADOW : COLORS.TEXT_SECONDARY;
        const backgroundColor = isFocused ? COLORS.BORDER : '';

        const handleNavigate = () => navigation.navigate(item.name);

        return (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.drawerItems,
              {
                backgroundColor,
              },
            ]}
            onPress={handleNavigate}
          >
            <Ionicons name={iconName} size={25} color={color} />

            <View style={styles.drawerItemTitle}>
              <Text style={[styles.itemTitle]}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
