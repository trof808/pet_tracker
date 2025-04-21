import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../../../entities/auth/services/authApi';

type UserInfo = {
  auth?: boolean;
  email?: string;
  id?: number;
};

export const useCheckAuth = (): UserInfo => {
  const getUserInfo = async () => {
    const res = await authApi.checkAuth();
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  return data ?? {};
};
