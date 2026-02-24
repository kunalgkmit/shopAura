import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LoginForm from '../../components/loginForm';
import SignUpForm from '../../components/signUpForm';
import { styles } from './styles';
import { APP_INFO } from '../../constants/constants';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
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
        <TouchableOpacity onPress={handleLogin}>
          <Text style={[styles.isLogin, styles.toggleButton]}>
            {isLogin ? APP_INFO.SIGN_UP : APP_INFO.LOGIN}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
