import { QueryClient, useQueryClient } from "@tanstack/react-query";

export const useLogoutUser = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    clearAllQueryData(queryClient);
    queryClient.resetQueries();
  };

  return logout;
};

const clearAllQueryData = (queryClient: QueryClient) => {
  const queries = queryClient.getQueryCache().getAll();
  queries.forEach((query) => {
    queryClient.setQueryData(query.queryKey, null);
  });
};
