import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../../../entities/auth/services/authApi';

type UserInfo = {
  auth?: boolean;
  email?: string;
  id?: number;
};

export const useCheckAuth = (): UserInfo => {
  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: authApi.checkAuth,
    select: (res) => res.data,
  });

  return data ?? {};
};
