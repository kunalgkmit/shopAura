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
    fontSize: hp('4.5%'),
  },
  columnWrapperStyle: {
    padding: 5,
    justifyContent: 'space-between',
    width: wp('85%'),
  },
  contentContainerStyle: { padding: 10, paddingBottom:hp('72%') },
});
