import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

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
    width:'100%'
  },

  inputError: {
    borderColor: COLORS.RED,
    borderWidth: 1.5,
  },

  eyeIcon: {
    marginLeft:wp('-8%')
  },
  

  label: {
    fontSize: hp('1.5%'),
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
    color: COLORS.TEXT_TERTIARY,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
