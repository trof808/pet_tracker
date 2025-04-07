import { rootRoute } from "./__root";
import { loginRoute } from "./LoginPage";
import { mainRoute } from "./MainPage";
import { registerRoute } from "./RegisterPage";

rootRoute.addChildren([loginRoute, registerRoute, mainRoute]);

export const routeTree = rootRoute;