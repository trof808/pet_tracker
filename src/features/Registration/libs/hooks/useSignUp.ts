import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../../../entities/auth/services/authApi';
import { useRouter } from '@tanstack/react-router';

type BodyType = { email: string; password: string };
type useSignInReturn = { mutate: (body: BodyType) => void; isPending: boolean };

export const useSignUp = (): useSignInReturn => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: async (body: BodyType) => {
      return await authApi.signUp(body);
    },
    onSuccess: (data) => {
      console.log(data); // тут нам токен приходит и тип токена. :)
      router.navigate({
        to: '/login',
      })
    },
    onError: (error) => {
      console.error(error, 'Упс, ошибка c каким-то кодом (позже обработаем)');
    },
  });

  return { mutate, isPending };
};
