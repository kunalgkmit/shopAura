import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.SHADOW,
    width: wp('8%'),
    height: hp('3.75%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5%'),
  },
});
