import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../../../entities/auth/services/authApi';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../../store/slices/userInfoSlice';

type UserInfo = {
  auth?: boolean;
  email?: string;
  id?: number;
};

export const useCheckAuth = (): UserInfo => {
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const res = await authApi.checkAuth();
    dispatch(setUserInfo(res.data));
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  return data ?? {};
};
