import { useState } from 'react';

import {
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from '@react-native-vector-icons/ionicons';

import { useUploadAvatar } from '@hooks/useAvatar';
import { useUserSignUp } from '@hooks/useUserSignUp';
import CustomTextInput from '@components/customTextInput';
import CustomButton from '@components/customButton';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUserName,
} from '@utils/helpers';
import { COLORS } from '@constants/colors';
import { APP_INFO } from '@constants/constants';

import { styles } from './styles';

export default function SignUpForm({ handleToggleLogin }: ToggleAuthScreen) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const [errors, setErrors] = useState({
    fullNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    avatarError: '',
  });

  const { mutate: uploadAvatar, isPending: avatarisPending } =
    useUploadAvatar();
  const { mutate: userSignUpMutate, isPending: signUpPending } =
    useUserSignUp();

  const verifyFullName = (value: string) => {
    setName(value);
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

  const handleAvatarUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        const image = response.assets[0];

        uploadAvatar(image, {
          onSuccess: data => {
            setAvatar(data);

            setErrors(prev => ({
              ...prev,
              avatarError: '',
            }));
          },
        });
      }
    });
  };

  const handleSignUpSuccess = () => {
    Alert.alert('Account Created', 'Please log in to continue', [
      { text: 'OK' },
    ]);
    handleToggleLogin();
  };

  const handleSubmit = () => {
    const fullNameError = validateUserName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword,
    );
    const avatarError = !avatar ? 'Select Avatar' : '';

    const updatedErrors = {
      fullNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      avatarError,
    };

    const hasError = Object.values(updatedErrors).some(item => item.length > 0);

    setErrors(updatedErrors);
    if (hasError) {
      return '';
    }
    userSignUpMutate(
      { name, email, password, avatar },
      {
        onSuccess: () => handleSignUpSuccess(),
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <TouchableOpacity
          style={[
            styles.avatarPlaceholder,
            errors.avatarError && { borderColor: COLORS.RED },
          ]}
          onPress={handleAvatarUpload}
        >
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : !avatarisPending ? (
            <Ionicons name="camera" size={28} />
          ) : (
            <ActivityIndicator />
          )}
        </TouchableOpacity>
      </View>

      <CustomTextInput
        label={APP_INFO.FULL_NAME_LABEL}
        placeholder={APP_INFO.FULL_NAME_PLACEHOLDER}
        value={name}
        onChangeText={verifyFullName}
        error={errors.fullNameError}
      />
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
        helperText={APP_INFO.PASSWORD_HELPER_TEXT}
      />
      <CustomTextInput
        placeholder="Confirm Password"
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={verifyConfirmPassword}
        error={errors.confirmPasswordError}
        secureTextEntry={true}
      />
      <CustomButton
        title="Create Account"
        onPress={handleSubmit}
        showLoading={signUpPending}
      />
    </View>
  );
}
