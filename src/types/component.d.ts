interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (data: string) => void;
  error?: string;
  editable?: boolean;
  autoCapitalize?: 'none';
  secureTextEntry?: boolean;
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

interface ToggleAuthScreen {
  handleToggleLogin: () => void;
}

interface CustomAppBarProps {
  title: string;
  showDrawer?: boolean;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryCardProps {
  categoryData: Category;
}
