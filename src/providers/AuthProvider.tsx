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

  //   apiClient.interceptors.response.use(
  //     (response) => response,
  //     async (error) => {
  //       const originalRequest = error.config;

  //       if (error.response?.status === 401 && !originalRequest._retry) {
  //         originalRequest._retry = true;

  //         try {
  //           const newToken = await refreshJwtToken();
  //           if (newToken) {
  //             originalRequest.headers.Authorization = `Bearer ${newToken}`;
  //             return apiClient(originalRequest);
  //           }
  //         } catch (refreshError) {
  //           localStorage.removeItem("accessToken");
  //           localStorage.removeItem("userId");
  //           return Promise.reject(refreshError);
  //         }

  //         return Promise.reject(error);
  //       }
  //     }
  //   );

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

// const refreshJwtToken = async (): Promise<string | null> => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_BASE_URL}/User/RefreshJwtToken`,
//       {},
//       { withCredentials: true }
//     );

//     const newToken = response.data.token;
//     localStorage.setItem("accessToken", newToken);
//     return newToken;
//   } catch {
//     return null;
//   }
// };
