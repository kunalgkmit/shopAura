import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: COLORS.SHADOW,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.TEXT_INVERSE,
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },

  clearFilter: {
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 1,
    borderColor: COLORS.SHADOW,
  },

  logout: { backgroundColor: COLORS.RED },

  clearFilterText: { color: COLORS.SHADOW },
});
