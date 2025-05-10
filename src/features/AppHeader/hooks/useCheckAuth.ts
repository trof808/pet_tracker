import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../entities/auth/store/userInfoSlice';
import { authApi } from '../../../entities/auth/services/authApi';

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
