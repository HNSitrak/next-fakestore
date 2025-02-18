import { createContext, useContext, useState } from "react";

type AuthContextType = { token: string | null; login: (token: string) => void; logout: () => void };
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  return <AuthContext.Provider value={{ token, login: setToken, logout: () => setToken(null) }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
