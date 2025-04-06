import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { routeTree } from "./pages/Routes";
import { JSX } from "react/jsx-runtime";


const router = createRouter({ routeTree });

const App = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
