import { useState } from 'react';
import { Alert, View } from 'react-native';

import { APP_INFO } from '@constants/constants';
import CustomTextInput from '@components/customTextInput';
import CustomButton from '@components/customButton';
import { useUserLogin } from '@hooks/useUserLogin';
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

  const handleLoginError = (error: Error) => {
    Alert.alert(
      'Login Failed',
      error?.message || 'Something went wrong, please try again.',
      [{ text: 'OK' }],
    );
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
    loginMutate(
      { email, password },
      {
        onError: handleLoginError,
      },
    );
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label={APP_INFO.EMAIL_LABEL}
        placeholder={APP_INFO.EMAIL_PLACEHOLDER}
        value={email}
        onChangeText={verifyEmail}
        error={errors.emailError}
      />
      <CustomTextInput
        label={APP_INFO.PASSWORD_LABEL}
        placeholder={APP_INFO.PASSWORD_PLACEHOLDER}
        value={password}
        onChangeText={verifyPassword}
        error={errors.passwordError}
        secureTextEntry={true}
      />
      <CustomButton
        title={APP_INFO.LOGIN}
        onPress={handleSubmit}
        showLoading={isPending}
      />
    </View>
  );
}
