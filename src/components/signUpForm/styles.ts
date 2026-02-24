import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp('100%'),
    paddingHorizontal: 10,
  },

  avatar: { borderRadius: 100, height: hp('17%'), width: wp('37%') },

  avatarWrapper: { padding: 20 },

  avatarPlaceholder: {
    height: hp('17%'),
    width: wp('37%'),
    borderWidth: 1.5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
