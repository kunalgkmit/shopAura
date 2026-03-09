import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  titleWrapper: {
    paddingLeft: 10,
    paddingTop: 15,
  },

  title: {
    fontSize: hp('3%'),
    fontWeight: '500',
  },
});
