import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },

  title: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: hp('6%'),
  },

  titleWrapper: {
    position: 'relative',
    left: wp('-30%'),
    marginVertical: wp('10%'),
  },

  doNotHaveAccount: {
    padding: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  signUp: {
    fontSize: hp('2%'),
  },

  signUpButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
  },

  accountExistText: {
    fontSize: hp('2%'),
  },

  loginButton: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
