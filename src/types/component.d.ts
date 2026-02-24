interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (data: string) => void;
  error?: string;
  editable?: boolean;
  autoCapitalize?: 'none';
  secureTextEntry?: boolean;
  isPassword?: boolean;
  label?: string;
  helperText?: string;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  showLoading?: boolean;
  isLogout?: boolean;
  isClearFilter?: boolean;
}
