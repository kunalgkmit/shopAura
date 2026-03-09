import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: COLORS.BORDER,
    paddingBottom: wp('3%'),
  },

  title: {
    fontSize: wp('7%'),
    fontFamily: 'PlayfairDisplay-Medium',
  },

  contentWrapper: {
    width: wp('50%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('5%'),
  },
});
