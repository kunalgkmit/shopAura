import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS } from '@constants/constants';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: hp('10%'),
  },
  image: {
    width: wp('100%'),
    height: hp('50%'),
  },

  title: {
    fontSize: hp('3%'),
    fontWeight: '500',
    fontFamily: FONTS.PLAYFAIR_DISPLAY,
  },

  price: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  },

  description: {
    fontSize: hp('2%'),
  },

  contentWrapper: {
    padding: 10,
    gap: 5,
  },

  buttonWrapper: {
    flexDirection: 'row',
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    gap: 10,
    backgroundColor: COLORS.BG_CARD,
    height: hp('10%'),
  },

  buttonSize: { width: '45%' },

  backIcon: {
    position: 'absolute',
    backgroundColor: COLORS.BG_CARD,
    top: hp('5%'),
    left: wp('5%'),
    zIndex: 1,
    padding: 10,
    borderRadius: wp('10%'),
  },

  descriptionTitle: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
  },
});
