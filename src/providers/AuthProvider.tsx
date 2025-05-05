import { createContext, useContext, ReactNode } from "react";
import axios, { AxiosInstance } from "axios";

const createApiClient = () => {
  const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true,
  });

  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return apiClient;
};

const AuthContext = createContext<{
  apiClient: AxiosInstance;
} | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const apiClient = createApiClient();

  const contextValue = {
    apiClient,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
