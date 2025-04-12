import { JSX } from 'react';
import { Registration } from '../../features/Registration/Registration';
import { rootRoute } from '../__root';
import { createRoute } from '@tanstack/react-router';

const RegisterPage = (): JSX.Element => {
  return <Registration />;
};

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registration',
  component: RegisterPage,
});

export default RegisterPage;