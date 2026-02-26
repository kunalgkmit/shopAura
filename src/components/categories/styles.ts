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
    padding: 6,
    justifyContent: 'space-evenly',
    width: wp('100%'),
    alignItems:'center',
    marginLeft: wp('-5%')
  },

  listWrapper: { width: '100%' },
});
