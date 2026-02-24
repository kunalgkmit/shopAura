import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
    paddingTop: 20,
  },

  avatar: { borderRadius: 100, height: 150, width: 150 },

  avatarWrapper: { padding: 20 },

  avatarPlaceholder: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'PlayfairDisplay-Medium',
    fontSize: 50,
  },

  titleWrapper: { position: 'relative', right: 100 },

  alreadyHaveAccount: {
    padding: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  accountExistText: {
    fontSize: 15,
  },

  loginButton: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
