import { JSX, ReactNode, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { useAuth } from "../entities/auth/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.navigate({ to: '/login' });
    }
  }, [isAuth, router]);

  return <>{children}</>;
};
