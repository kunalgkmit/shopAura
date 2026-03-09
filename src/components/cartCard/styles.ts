import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
  },
  parentBox: {
    width: wp('93%'),
    height: hp('14%'),
    backgroundColor: COLORS.BG_CARD,
    borderRadius: wp('5%'),
    flexDirection: 'row',
    alignItems:'center'
  },
  image: {
    width: wp('30%'),
    height: hp('14%'),
    borderRadius: wp('5%'),
  },
  title: {
    fontSize: hp('1.7%'),
  },

  price: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },

  contentWrapper: {
    height: '100%',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('5%'),
  },
  imageWrapper: {
    width: wp('30%'),
    borderRadius: wp('5%'),
  },
  closeIcon: {
    alignSelf: 'flex-end',
    color: COLORS.TEXT_SECONDARY,
    position: 'absolute',
    padding: 10,
  },

  actionText: {
    fontSize: hp('1.5%'),
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '500',
  },
  divider: {
    color: COLORS.BORDER,
  },
});
