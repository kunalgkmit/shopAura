import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import SignUpForm from '@components/signUpForm';
import LoginForm from '@components/loginForm';
import { APP_INFO } from '@constants/constants';

import { styles } from './styles';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggleLogin = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {isLogin ? APP_INFO.LOGIN : APP_INFO.SIGN_UP}
        </Text>
      </View>
      {isLogin ? <LoginForm /> : <SignUpForm />}

      <View style={styles.authFooter}>
        <Text style={styles.footerText}>
          {isLogin
            ? APP_INFO.DO_NOT_HAVE_ACCOUNT
            : APP_INFO.ALREADY_HAVING_ACCOUNT}
        </Text>
        <TouchableOpacity onPress={handleToggleLogin}>
          <Text style={[styles.isLogin, styles.toggleButton]}>
            {isLogin ? APP_INFO.SIGN_UP : APP_INFO.LOGIN}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
