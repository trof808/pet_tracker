import { ReactNode } from "@tanstack/react-router";
import { createContext, JSX, useContext, useState } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const data = useContext(AuthContext);

  if (!data) {
    throw new Error("Can not 'useAuth' outside of a AuthProvider");
  }

  return data;
};