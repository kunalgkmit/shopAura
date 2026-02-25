import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapper: {
    backgroundColor: COLORS.SHADOW,
    width: '100%',
    height: hp('30%'),
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  buttonTextWrapper: {
    marginLeft: wp('7%'),
    height: '60%',
    justifyContent: 'space-around',
    marginTop: hp('10%'),
  },
  textWrapper: {
    height: 45,
    justifyContent: 'space-between',
  },
  text: { color: COLORS.TEXT_INVERSE, fontWeight: 'bold' },
  profileImage: { height: 70, width: 70, tintColor: COLORS.SHADOW },
  drawerItems: {
    flexDirection: 'row',
    width: '90%',
    height: hp('5.5%'),
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
  },
  drawerItemTitle: {
    marginLeft: wp('3%'),
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});
