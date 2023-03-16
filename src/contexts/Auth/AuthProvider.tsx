import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../@types/User";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line no-undef
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
          console.log(true);
        }
      }
    };
    validateToken();
  }, [api]);

  const register = async (name: string, email: string, password: string) => {
    await api.register(name, email, password);
    return true;
  };

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    console.log("signout está sendo executada.");
    setUser(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
