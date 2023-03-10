import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/user", { token });
    return response.data;
  },

  signin: async (email: string, password: string) => {
    const response = await api.post("/signin", { email, password });
    return response.data;
  },

  register: async (name: string, email: string, password: string) => {
    const response = await api.post("/user", { name, email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
