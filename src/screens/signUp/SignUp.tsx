import { View } from 'react-native';
import SignUpForm from '../../components/signUpForm';
import { styles } from './styles';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}
