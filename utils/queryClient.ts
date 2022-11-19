import { MutationCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: ["data", "error"],
      refetchOnWindowFocus: false,
    },
  },
  mutationCache: new MutationCache({
    onError: (err: any) => {
      //handling error
      //   toast.error(err.response.data.message);
    },
  }),
});
