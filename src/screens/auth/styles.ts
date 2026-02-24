import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: hp('6%'),
  },

  titleWrapper: {
    marginVertical: wp('10%'),
  },

  authFooter: {
    padding: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  footerText: {
    fontSize: hp('2%'),
  },

  signUpButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
  },

  isLogin: {
    fontSize: hp('2%'),
  },

  toggleButton: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
