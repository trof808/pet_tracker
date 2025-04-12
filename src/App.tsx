import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routes/Routes";
import { JSX } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./entities/auth/AuthContext";

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

const App = (): JSX.Element => {
  return (
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}  />
        </QueryClientProvider>
      </AuthProvider>
  );
};

export default App;
