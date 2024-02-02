import { SubjectProvider } from "@/contexts/SubjectContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <main className={inter.className}>
      <SubjectProvider>
        <Component {...pageProps} />
      </SubjectProvider>
    </main>
  );
}
