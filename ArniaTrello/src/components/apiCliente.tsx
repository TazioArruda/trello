// src/api/apiClient.tsx
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://arnia-kanban.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autorização a cada requisição
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createUser = async (email: string, password: string, name: string) => {
  const response = await apiClient.post('/api/user', { email, password, name });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await apiClient.post('/api/user/login', { email, password });
  return response.data;
};

export const createCard = async (title: string, content: string) => {
  const response = await apiClient.post('/api/card', { title, content });
  return response.data;
};

export const updateCard = async (id: string, title: string, content: string) => {
  const response = await apiClient.put(`/api/card/${id}`, { title, content });
  return response.data;
};

export const changeCardColumn = async (id: string, column: string) => {
  const response = await apiClient.put(`/api/card/${id}`, { column });
  return response.data;
};

export const getAllCards = async () => {
  const response = await apiClient.get('/api/card');
  return response.data;
};

export const deleteCard = async (id: string) => {
  const response = await apiClient.delete(`/api/card/${id}`);
  return response.data;
};

export default apiClient;
