import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapper: {
    backgroundColor: COLORS.SHADOW,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonTextWrapper: {
    marginLeft: 30,
    height: '60%',
    justifyContent: 'space-around',
    marginTop: 30,
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
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
  },
  drawerItemIcon: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  drawerItemTitle: {
    marginLeft: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});
