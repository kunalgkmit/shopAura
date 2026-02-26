import { COLORS } from './colors';

export const APP_INFO = {
  TITLE: 'Shop Aura',
  SIGN_UP: 'Sign Up',
  LOGIN: 'Login',
  ALREADY_HAVING_ACCOUNT: 'Already having an account?',
  DO_NOT_HAVE_ACCOUNT: "Didn't have acount?",
  PASSWORD_HELPER_TEXT:
    'Min. 8 characters, 1 uppercase, 1 lowercase & 1 number',

  FULL_NAME_LABEL: 'Full Name',
  EMAIL_LABEL: 'Email',
  PASSWORD_LABEL: 'Password',

  FULL_NAME_PLACEHOLDER: 'Enter Full Name',
  EMAIL_PLACEHOLDER: 'Enter Email',
  PASSWORD_PLACEHOLDER: 'Enter Password',
};

export const ICONS = {
  HOME: 'home',
  HOME_OUTLINE: 'home-outline',
  HEART: 'heart',
  HEART_OUTLINE: 'heart-outline',
  CART: 'cart',
  CART_OUTLINE: 'cart-outline',
};

export const CATEGORIES = [
  { id: 1, name: 'Fashion', icon: 'shirt-outline', color: COLORS.FASHION },
  {
    id: 2,
    name: 'Electronics',
    icon: 'battery-charging-outline',
    color: COLORS.ELECTRONICS,
  },
  { id: 3, name: 'Grocery', icon: 'bag-outline', color: COLORS.GROCERY },
  { id: 4, name: 'Beauty', icon: 'rose-outline', color: COLORS.BEAUTY },
  { id: 5, name: 'Sports', icon: 'football-outline', color: COLORS.SPORTS },
  { id: 6, name: 'Books', icon: 'book-outline', color: COLORS.BOOKS },
];

export const IMAGES = {
  HOME_BANNER: require('@assets/images/homeBanner.png'),
};

export const FONTS = {
  PLAYFAIR_DISPLAY: 'PlayfairDisplay-Medium',
};
