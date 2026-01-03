import "styles/globals.css";
import "nextra-theme-docs/style.css";
import "styles/theme-override.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
