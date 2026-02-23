import { useState } from 'react';

import { Text, View } from 'react-native';
import CustomTextInput from '../customTextInput';
import { styles } from './styles';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Enter Name" value={name} />
      <CustomTextInput placeholder="Enter Email" value={email} />
      <CustomTextInput placeholder="Enter Password" value={password} />
      <CustomTextInput placeholder="Verify Password" value={confirmPassword} />
    </View>
  );
}
