import "../styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClientProvider } from "react-query";
import { queryClient } from "utils/queryClient";
import { StoreProvider } from "reducers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CryptBook</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
