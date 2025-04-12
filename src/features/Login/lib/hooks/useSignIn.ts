import { useMutation } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { authApi } from '../../../../entities/auth/services/authApi';
import { useAuthContext } from '../../../../entities/auth/AuthContext';

type BodyType = { email: string; password: string };
type useSignInReturn = { mutate: (body: BodyType) => void; isPending: boolean };

export const useSignIn = (): useSignInReturn => {
  const router = useRouter();
  const { setIsAuth } = useAuthContext();
  const { mutate, isPending } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (body: BodyType) => {
      return await authApi.signIn(body);
    },
    onSuccess: () => {
      // тут нам токен приходит и тип токена. :)
      setIsAuth(true);
      router.navigate({
        to: '/main',
      });
    },
    onError: (error) => {
      throw error;
    },
  });

  return { mutate, isPending };
};
