import type { AxiosInstance } from "axios";
import axios, { isAxiosError } from "axios";

const apiClient : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api',
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}   ), (error) => {    return Promise.reject(error);
});

export const getAxiosErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    return error.response?.data?.message ?? error.message ?? 'Request failed';
  }
  return 'Something went wrong';
};

export default apiClient;