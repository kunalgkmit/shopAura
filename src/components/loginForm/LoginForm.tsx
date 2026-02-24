import { useState } from 'react';
import { View } from 'react-native';

import CustomTextInput from '@components/customTextInput';
import { useUserLogin } from '@hooks/useUserLogin';
import CustomButton from '@components/customButton';
import { validateEmail, validatePassword } from '@utils/helpers';

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
    if (emailError) {
      setErrors(prev => ({
        ...prev,
        emailError,
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        emailError: '',
      }));
    }
  };

  const verifyPassword = (pwd: string) => {
    setPassword(pwd);
    const passwordError = validatePassword(pwd);

    if (passwordError) {
      setErrors(prev => ({
        ...prev,
        passwordError,
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        passwordError: '',
      }));
    }
  };

  const handleSubmit = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const updatedErrors = {
      emailError,
      passwordError,
    };

    const hasError = Object.values(updatedErrors).some(item => item.length > 0);

    if (hasError) {
      setErrors(updatedErrors);
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
