import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { IdProvider } from "@radix-ui/react-id";

import MDXComponents from "@components/mdx-components";
import NavigationProvider from "@components/navigation-provider";
import ThemeController from "@components/theme-controller";
import Layout from "@layouts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}
export default MyApp;
