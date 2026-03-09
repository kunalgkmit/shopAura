import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  parent: { width: wp('100%'), paddingHorizontal: 10 },
  container: {
    backgroundColor: COLORS.BG_CARD,
    borderRadius: wp('3%'),
  },

  priceDetailsWrapper: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.BORDER,
    padding: 10,
  },

  title: {
    fontSize: hp('1.6%'),
    fontWeight: '500',
  },

  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  middleBox: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.BORDER,
    gap: hp('1%'),
  },

  subTitle: {
    fontSize: hp('1.6%'),
  },

  discount: {
    fontSize: hp('1.6%'),
    color: COLORS.GREEN,
  },

  bottomBox: {
    padding: 10,
  },
});
