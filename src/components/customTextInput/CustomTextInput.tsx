import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  error,
  editable,
  autoCapitalize = 'none',
  secureTextEntry,
  isPassword,
  label,
  helperText,
}: CustomTextInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);

  const handlePasswordVisible = () => {
    setPasswordVisible(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {label ? (
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>{label}</Text>
          </View>
        ) : null}
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            placeholder={placeholder}
            placeholderTextColor={COLORS.TEXT_TERTIARY}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            editable={editable}
            secureTextEntry={passwordVisible}
          />
          {isPassword ? (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={handlePasswordVisible}
            >
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={22} />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.messageContainer}>
          <Text
            style={[
              styles.messageText,
              error ? styles.errorText : styles.helperText,
            ]}
          >
            {error || helperText || ''}
          </Text>
        </View>
      </View>
    </View>
  );
}
