import "../styles/globals.css";
// import "@vechaiui/core/dist/vechaiui.css";
import * as React from "react";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { IdProvider } from "@radix-ui/react-id";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import MDXComponents from "@components/mdx-components";
import NavigationProvider from "@components/navigation-provider";
import ThemeController from "@components/theme-controller";
import Layout from "@layouts/layout";
import { getSeo } from "@utils/seo";
import * as gtag from "@libs/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const seo = getSeo();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      </Head>
      <DefaultSeo {...seo} />
      <NavigationProvider>
        <ThemeController>
          <IdProvider>
            <MDXProvider components={MDXComponents}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MDXProvider>
          </IdProvider>
        </ThemeController>
      </NavigationProvider>
    </>
  );
}
export default MyApp;
