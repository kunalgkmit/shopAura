import { useState } from 'react';

import { View } from 'react-native';
import CustomTextInput from '../customTextInput';
import { styles } from './styles';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUserName,
} from '../../utils/helpers';

export default function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const [errors, setErrors] = useState({
    fullNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const verifyFullName = (value: string) => {
    setFullName(value);
    const fullNameError = validateUserName(value);

    setErrors(prev => ({
      ...prev,
      fullNameError,
    }));
  };

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

  const verifyConfirmPassword = (pwd: string) => {
    setConfirmPassword(pwd);
    const confirmPasswordError = validateConfirmPassword(pwd, password);

    setErrors(prev => ({
      ...prev,
      confirmPasswordError,
    }));
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={verifyFullName}
        error={errors.fullNameError}
      />
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
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={verifyConfirmPassword}
        error={errors.confirmPasswordError}
        secureTextEntry={true}
      />
    </View>
  );
}
