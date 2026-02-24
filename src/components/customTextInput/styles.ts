import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },

  input: {
    height: 52,
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
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

  eyeIcon: { position: 'absolute', right: 10, top: 33 },

  label: {
    fontSize: 14,
  },

  labelWrapper: { padding: 2 },

  messageContainer: {
    marginTop: 4,
    justifyContent: 'center',
  },

  messageText: {
    fontSize: 12,
  },

  errorText: {
    color: COLORS.RED,
  },

  helperText: {
    color: COLORS.TEXT_SECONDARY,
  },
});
