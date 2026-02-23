import { Asset } from 'react-native-image-picker';
import { axiosInstance } from '../network/axiosInstance';
import { ENDPOINTS } from '../network/URLs';
import { LoginProps, SignUpProps } from '../types/auth';

export const userSignUp = async (userData: SignUpProps) => {
  const response = await axiosInstance.post(ENDPOINTS.AUTH.USER, userData);
  return response.data;
};

export const userLogin = async (userData: LoginProps) => {
  const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, userData);
  return response.data;
};

export const uploadFileService = async (image: Asset) => {
  const formData = new FormData();

  formData.append('file', {
    uri: image.uri,
    type: image.type,
    name: image.fileName,
  });

  const response = await axiosInstance.post('/files/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
