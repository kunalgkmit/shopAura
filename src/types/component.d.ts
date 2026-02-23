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

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPending?: boolean;
  isLogout?: boolean;
  isClearFilter?: boolean;
}