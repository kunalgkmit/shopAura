import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  parentBox: {
    width: wp('92%'),
    height: hp('15%'),
    backgroundColor: COLORS.BG_PRODUCT_CARD,
    flexDirection: 'row',
    borderRadius: wp('5%'),
    alignItems: 'center',
  },
  image: {
    height: hp('15%'),
    width: wp('40%'),
    borderRadius: wp('5%'),
    padding: 5,
  },
  cartIcon: {
    backgroundColor: COLORS.SHADOW,
    padding: 5,
    borderRadius: wp('2%'),
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    paddingBottom: 10,
  },

  contentWrapper: {
    height: '100%',
    justifyContent: 'space-between',
    marginLeft: wp('3%'),
  },

  title: {
    fontSize: hp('2.5%'),
    fontWeight: '500',
  },

  price: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});
