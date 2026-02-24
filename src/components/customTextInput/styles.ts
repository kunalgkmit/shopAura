import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp('1%'),
  },

  input: {
    height: hp('5%'),
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: hp('2%'),
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },

  inputError: {
    borderColor: COLORS.RED,
    borderWidth: 1.5,
  },

  multiLine: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 12,
  },

  eyeIcon: { position: 'absolute', right: hp('2%'), top: hp('3.5%') },

  label: {
    fontSize: 14,
  },

  labelWrapper: { padding: 2 },

  messageContainer: {
    marginTop: hp('0.5%'),
    justifyContent: 'center',
  },

  messageText: {
    fontSize: hp('1.3%'),
  },

  errorText: {
    color: COLORS.RED,
  },

  helperText: {
    color: COLORS.TEXT_SECONDARY,
  },
});
