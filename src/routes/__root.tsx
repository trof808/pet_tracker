import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ProtectedRoute } from './ProtectedRoute';

const RootLayout = () => <ProtectedRoute><Outlet /></ProtectedRoute>;

export const rootRoute = createRootRoute({
  component: RootLayout,
});
