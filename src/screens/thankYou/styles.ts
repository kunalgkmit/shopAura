import { FONTS } from '@constants/constants';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    gap: 20,
  },

  thankYou: {
    fontSize: hp('5%'),
    fontFamily: FONTS.CORMORANT_ITALIC
  },
});
