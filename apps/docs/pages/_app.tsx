import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "components/header";
import { useRouter } from "next/router";
import classes from "styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideHeader = ["/docs", "/blog"].some((path) =>
    router.pathname.startsWith(path)
  );
  return (
    <ThemeProvider attribute="class">
      <span className={classes.gradientBg}></span>
      {!hideHeader && <Header />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
