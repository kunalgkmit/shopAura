import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Ionicons from '@react-native-vector-icons/ionicons';

import { ROUTES } from '@constants/routes';
import { ICONS } from '@constants/constants';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function CustomDrawer({
  state,
  navigation,
}: DrawerContentComponentProps) {
  const getIconName = (routeName: string, isFocused: boolean): string => {
    if (routeName === ROUTES.DRAWER.HOME) {
      return isFocused ? ICONS.HOME : ICONS.HOME_OUTLINE;
    } else if (routeName === ROUTES.DRAWER.MY_WISHLIST) {
      return isFocused ? ICONS.HEART : ICONS.HEART_OUTLINE;
    } else {
      return isFocused ? ICONS.CART : ICONS.CART_OUTLINE;
    }
  };

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
        const iconName = getIconName(item.name, isFocused);
        const color = isFocused ? COLORS.SHADOW : COLORS.TEXT_SECONDARY;

        const handleNavigate = () => navigation.navigate(item.name);

        return (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.drawerItems,
              {
                backgroundColor: isFocused ? COLORS.BORDER : '',
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
