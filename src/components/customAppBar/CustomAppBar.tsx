import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function CustomAppBar({ title, showDrawer }: CustomAppBarProps) {
  const navigation = useNavigation<DrawerNavProp>();
  const insets = useSafeAreaInsets();

  const handleLeftIconPress = () => {
    if (showDrawer) {
      navigation.openDrawer();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.contentWrapper}>
        <Ionicons name="menu-outline" size={30} onPress={handleLeftIconPress} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
