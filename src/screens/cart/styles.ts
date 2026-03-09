import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: COLORS.BG_CARD,
    height: hp('10%'),
    width: wp('100%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalAmount: {
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  price: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});
