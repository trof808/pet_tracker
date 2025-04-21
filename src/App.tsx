import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./routes/Routes";
import { JSX } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

const App = (): JSX.Element => {
  return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}  />
        </QueryClientProvider>
  );
};

export default App;
