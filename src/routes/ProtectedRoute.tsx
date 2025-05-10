import { JSX, ReactNode, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import { useCheckAuth } from '../features/AppHeader/hooks/useCheckAuth';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  const { auth } = useCheckAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.navigate({ to: '/main' });
    } else {
      router.navigate({ to: '/login' });
    }
  }, [auth, router]);

  return <>{children}</>;
};
