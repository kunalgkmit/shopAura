import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems:'center'
  },
  homeBanner: { height: hp('20%'), width: wp('95%'), borderRadius: 25 },
});
