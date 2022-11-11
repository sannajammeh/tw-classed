import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "components/header";
import { useRouter } from "next/router";
import GradientBg from "components/ui/gradient-bg";
import AtomDarkPrism from "components/ui/prism-theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideHeader = ["/docs", "/blog"].some((path) =>
    router.pathname.startsWith(path)
  );
  return (
    <ThemeProvider attribute="class">
      <GradientBg />
      {!hideHeader && <Header />}
      <Component {...pageProps} />
      <AtomDarkPrism />
    </ThemeProvider>
  );
}

export default MyApp;
