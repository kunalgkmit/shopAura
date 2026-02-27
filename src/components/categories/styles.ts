import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FONTS } from '@constants/constants';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  title: {
    fontFamily: FONTS.PLAYFAIR_DISPLAY,
    fontSize: hp('3%'),
  },

  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  titleWrapper: {
    paddingVertical: 15,
  },
});
