import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.SHADOW,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.TEXT_INVERSE,
    fontSize: 18,
    fontFamily: 'PlayfairDisplay-Medium',
  },

  clearFilter: {
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 1,
    borderColor: COLORS.SHADOW,
  },

  logout: { backgroundColor: COLORS.RED },

  clearFilterText: { color: COLORS.SHADOW },
});
