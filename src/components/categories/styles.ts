import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: hp('3%'),
  },
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
    width: wp('100%'),
    alignItems: 'center',
    marginLeft: wp('-5%'),
    marginBottom: hp('2%'),
  },

  listWrapper: { width: '100%' },

  titleWrapper: {
    paddingVertical: 15,
  },
});
