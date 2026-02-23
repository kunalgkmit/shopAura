import { Asset } from 'react-native-image-picker';
import { axiosInstance } from '../network/axiosInstance';
import { ENDPOINTS } from '../network/URLs';

export const userSignUp = async () => {
  const response = await axiosInstance.post(ENDPOINTS.AUTH.USER, {
    name: 'Ok cool',
    email: 'okcool123@gmail.com',
    password: '1234',
    avatar: 'https://api.lorem.space/image/face?w=640&h=480',
  });
  console.log(response);
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
