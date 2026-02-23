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
