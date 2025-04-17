import { JSX } from "react";
import { Login } from "../../features/Login/LoginFeature";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../__root";

const LoginPage = (): JSX.Element => {
  return <Login />
};

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

export default LoginPage;