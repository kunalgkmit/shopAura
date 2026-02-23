interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (data: string) => void;
  error?: string;
  editable?: boolean;
  autoCapitalize?: 'none';
  secureTextEntry?: boolean;
  onPress?: () => void;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiLine?: boolean;
  isPassword?: boolean;
}
