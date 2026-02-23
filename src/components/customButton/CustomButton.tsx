import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { COLORS } from '../../constants/colors';
import { styles } from './styles';

export default function CustomButton({
  title,
  onPress,
  isPending,
  isLogout,
  isClearFilter,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isLogout && styles.logout,
        isClearFilter && styles.clearFilter,
      ]}
      onPress={onPress}
      disabled={isPending}
    >
      {isPending ? (
        <ActivityIndicator color={COLORS.BG_SURFACE} />
      ) : (
        <Text
          style={[styles.buttonText, isClearFilter && styles.clearFilterText]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
