import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    marginTop: 30,
  },

  avatar: { borderRadius: 100, height: 200, width: 200 },

  avatarWrapper: { padding: 20 },

  avatarPlaceholder: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: 50,
  },

  titleWrapper: { position: 'relative', right: 120, marginVertical: 40 },

  alreadyHaveAccount: {
    padding: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  signUp: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: 15,
  },

  signUpButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 5,
  },

  welcomeText: {
    fontFamily: 'CormorantGaramond-Italic',
    fontSize: 50,
  },
});
