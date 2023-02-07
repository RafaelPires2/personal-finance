import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate", { token });
    return response.data;
  },

  // signin: async (email: string, password: string) => {
  //   const response = await api.get("/users", { email, password });
  //   const selectedUsers = response.data.filter(
  //     (res: any) => res.user.email === email && res.user.password === password
  //   );
  //   if (selectedUsers.length > 0) {
  //     selectedUsers[0].user.password = null;
  //     return selectedUsers[0];
  //   }
  //   return selectedUsers;
  // },

  signin: async (email: string, password: string) => {
    const response = await api.post("/signin", { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
