import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

// export const useApi = () => ({
//   validateToken: async (token: string) => {

//     return {
//       user: { id: 1, name: "Rafael", email: "rafael@gmail.com" },
//     };
//     // processo correto para fazer requisição
//     const response = await api.post("/validate", { token });
//     return response.data;
//   },

//   signin: async (email: string, password: string) => {
//     // usuario fake pois não existe api para requisição
//     return {
//       user: { id: 1, name: "Rafael", email: "rafael@gmail.com" },
//       token: "123456789",
//     };
//     // processo correto para fazer requisição
//     const response = await api.post("/signin", { email, password });
//     return response.data;
//   },

//   // return fake pois nao tem api para requisição
//   logout: async () => {
//     return { status: true };
//   },
//   // return correto para fazer requisição
//   const response = await api.post("/logout");
//   return response.data;
// });

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "José", email: "jose@gmail.com" },
    };
    // const response = await api.post("/validate", { token });
    // return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "José", email: "jose@gmail.com" },
      token: "123456789",
    };
    // const response = await api.post("/signin", { email, password });
    // return response.data;
  },
  logout: async () => {
    return { status: true };
    // const response = await api.post("/logout");
    // return response.data;
  },
});
