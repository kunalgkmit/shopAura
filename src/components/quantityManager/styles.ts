import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.SHADOW,
    padding: 15,
    borderRadius: wp('3.5%'),
    justifyContent: 'center',
    margin: 10,
    gap: hp('0.8%'),
  },

  quantity: {
    fontSize: hp('2%'),
    fontWeight: '500',
    color: COLORS.BG_CARD,
  },
});
