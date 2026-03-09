import Ionicons from '@react-native-vector-icons/ionicons';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { COLORS } from '@constants/colors';

export function IconButton({
  name,
  size,
  handlePress,
  disabled,
}: {
  name: string;
  size: number;
  handlePress: () => void;
  disabled?: boolean;
}) {
  return (
    <View style={styles.button}>
      <Ionicons
        name={name}
        size={size}
        onPress={handlePress}
        color={COLORS.BG_CARD}
        disabled={disabled}
      />
    </View>
  );
}
