import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MainPage from './MainPage';

const RootLayout = () => <Outlet />;

export const rootRoute = createRootRoute({
  component: RootLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registration',
  component: RegisterPage,
});

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/main',
  component: MainPage,
});

rootRoute.addChildren([loginRoute, registerRoute, mainRoute]);

export const routeTree = rootRoute;
