import { View } from 'react-native';
import LoginForm from '../../components/loginForm';
import { styles } from './styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}
