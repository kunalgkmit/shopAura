import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 10,
  },
  paymentWrapper: {
    gap: 10,
    padding: 10,
  },
  paymentTitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    marginBottom: 5,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 12,
    gap: 12,
    backgroundColor: COLORS.BG_CARD,
  },
  selectedOption: {
    borderColor: COLORS.SHADOW,
    backgroundColor: COLORS.BG_SURFACE,
  },
  paymentLabel: {
    flex: 1,
    fontSize: hp('1.8%'),
  },
  radioIcon: {
    marginLeft: 'auto',
  },
});
