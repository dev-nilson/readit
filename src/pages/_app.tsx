import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../../apollo-client";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="bg-slate-200 h-screen overflow-y-scroll">
        <Toaster />
        <Header />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
