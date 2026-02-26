import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS } from '@constants/constants';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontFamily: FONTS.PLAYFAIR_DISPLAY,
    fontSize: hp('3%'),
  },
  // columnWrapperStyle: {
  //   justifyContent: 'space-evenly',
  //   width: wp('100%'),
  //   alignItems: 'center',
  //   marginLeft: wp('-5%'),
  //   marginBottom: hp('2%'),
  // },

  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  titleWrapper: {
    paddingVertical: 15,
  },
});
