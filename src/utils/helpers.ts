export const validateUserName = (userName: string) => {
  if (!userName.trim().length) {
    return 'Enter Full Name';
  } else if (userName.trim().length < 3) {
    return 'Full name must be of min. 3 characters';
  } else if (!/^[A-Za-z]+( [A-Za-z]+)?$/.test(userName)) {
    return 'Only letters allowed and only one space between names';
  }
  return '';
};

export const validateEmail = (email: string) => {
  if (!email.trim().length) {
    return 'Enter Email';
  } else if (!/^[\w.+\-]+@gmail\.com$/.test(email)) {
    return 'Enter Valid Email containing @gmail.com';
  }
  return '';
};

export const validatePassword = (pwd: string) => {
  if (!pwd) {
    return 'Password is required';
  }

  if (pwd.length < 8) {
    return 'Minimum 8 characters';
  }

  if (!/[A-Z]/.test(pwd)) {
    return 'At least one uppercase letter';
  }

  if (!/[a-z]/.test(pwd)) {
    return 'At least one lowercase letter';
  }

  if (!/\d/.test(pwd)) {
    return 'At least one number';
  }

  if (/[@$!%*?&]/.test(pwd)) {
    return 'No special characters allowed';
  }
  return '';
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string => {
  if (!confirmPassword.length) {
    return 'Confirm your password';
  } else if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};
