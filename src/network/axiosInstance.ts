import axios from 'axios';
import { BASE_URL } from '@env';
import { CLIENT_ERRORS } from '@constants/network';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === CLIENT_ERRORS.UNAUTHORIZED) {
        throw new Error('Unauthorized access, please try again');
      }

      if (data?.message) {
        throw new Error(data.message);
      }

      throw error;
    }

    throw new Error(
      'Server is not reachable. Please check your internet connection.',
    );
  },
);
