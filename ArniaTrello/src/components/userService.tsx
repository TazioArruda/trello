import apiClient from "./apiCliente";


// Tipos para as respostas da API
interface LoginResponse {
  token: string;
}

interface CreateUserResponse {
  message: string;
}

// Função para criar um novo usuário
export const createUser = async (fullName: string, email: string, password: string): Promise<CreateUserResponse> => {
  const response = await apiClient.post<CreateUserResponse>('/api/user', { fullName, email, password });
  return response.data;
};

// Função para fazer login de usuário
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/api/user/login', { email, password });
  return response.data;
};
