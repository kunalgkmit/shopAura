import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  box: {
    height: hp('20%'),
    width: wp('40%'),
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  categoryName: {
    fontSize: hp('2%'),
    fontFamily: 'PlayfairDisplay-Medium',
  },
  categoryImage: {
    height: hp('15%'),
    width: wp('30%'),
    borderRadius: wp('5%'),
  },
});
