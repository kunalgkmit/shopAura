import { useState } from 'react';

import { View } from 'react-native';

import CustomTextInput from '../customTextInput';
import { validateEmail, validatePassword } from '../../utils/helpers';
import CustomButton from '../customButton';
import { useUserLogin } from '../hooks/useUserLogin';
import { styles } from './styles';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const { mutate: loginMutate, isPending } = useUserLogin();

  const verifyEmail = (value: string) => {
    setEmail(value);
    const emailError = validateEmail(value);

    setErrors(prev => ({
      ...prev,
      emailError,
    }));
  };

  const verifyPassword = (pwd: string) => {
    setPassword(pwd);
    const passwordError = validatePassword(pwd);

    setErrors(prev => ({
      ...prev,
      passwordError,
    }));
  };

  const handleSubmit = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const updatedErrors = {
      emailError,
      passwordError,
    };

    const hasError = Object.values(updatedErrors).some(item => item.length > 0);

    setErrors(updatedErrors);
    if (hasError) {
      return '';
    }
    loginMutate({ email, password });
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={verifyEmail}
        error={errors.emailError}
      />
      <CustomTextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={verifyPassword}
        error={errors.passwordError}
        secureTextEntry={true}
        isPassword={true}
      />
      <CustomButton
        title="Login"
        onPress={handleSubmit}
        showLoading={isPending}
      />
    </View>
  );
}
