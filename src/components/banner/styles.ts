import { FONTS } from '@constants/constants';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  homeBanner: {
    height: hp('18%'),
    width: wp('95%'),
    borderRadius: 25,
  },
  headPhone: {
    height: hp('12%'),
    width: wp('24%'),
    marginTop: hp('1.2%'),
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
  },
  shop: {
    fontSize: hp('4%'),
    fontFamily: FONTS.PLAYFAIR_DISPLAY,
  },
  aura: {
    fontSize: hp('5%'),
    fontFamily: FONTS.CORMORANT_ITALIC,
  },
  textWrapper: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  textButton: {
    gap: hp('1%'),
  },
});
