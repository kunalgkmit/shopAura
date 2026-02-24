import { useState } from 'react';
import { View } from 'react-native';
import LoginForm from '../../components/loginForm';
import SignUpForm from '../../components/signUpForm';
import { styles } from './styles';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(prev => !prev);
  };
  return (
    <View style={styles.container}>
      {isLogin ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <SignUpForm handleLogin={handleLogin} />
      )}
    </View>
  );
}
