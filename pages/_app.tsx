import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/lib/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
