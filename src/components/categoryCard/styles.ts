import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/constants';

export const styles = StyleSheet.create({
  container: { padding: 5, paddingBottom: 10 },
  box: {
    height: hp('13%'),
    width: wp('28%'),
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  categoryName: {
    fontSize: hp('1.6%'),
    fontFamily: FONTS.PLAYFAIR_DISPLAY,
    color: COLORS.TEXT_INVERSE,
  },
  categoryImage: {
    height: hp('15%'),
    width: wp('30%'),
    borderRadius: wp('5%'),
  },

  iconWrapper: {
    backgroundColor: COLORS.OPAQUE_BG,
    padding: 10,
    borderRadius: 12,
  },
});
