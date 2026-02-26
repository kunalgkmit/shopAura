import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  parentBox: {
    height: hp('23%'),
    width: wp('43%'),
    backgroundColor: COLORS.BG_PRODUCT_CARD,
    borderRadius: wp('3%'),
    alignItems: 'center',
    margin: 10,
  },
  childBox: {
    height: hp('15%'),
    width: wp('41.7%'),
    backgroundColor: COLORS.BG_CARD,
    borderRadius: wp('3%'),
    marginTop: 2,
  },
  image: {
    height: hp('15%'),
    width: wp('41.7%'),
    borderRadius: wp('3%'),
  },
  title: {
    fontSize: hp('2%'),
  },
  price: {
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
  },
  textWrapper: {
    flex: 1,
    gap: 2,
    paddingRight: 8,
  },
  contentWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  cartIcon: {
    marginTop: hp('1%'),
    backgroundColor: COLORS.SHADOW,
    padding: 5,
    borderRadius: wp('2%'),
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
