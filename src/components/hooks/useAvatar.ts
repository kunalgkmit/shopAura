import { useMutation } from '@tanstack/react-query';
import { uploadFileService } from '../../services/auth.service';

export const useUploadAvatar = () => {
  return useMutation({
    mutationFn: uploadFileService,
  });
};