import '@fontsource/jetbrains-mono';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/500.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { applyGlobalStyles } from '@config/stitches.config';
import { defaultSeoProps } from '@config/seo.config';
import { ThemeProvider } from '@components/ThemeProvider';
import { Layout } from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  applyGlobalStyles();
  return (
    <ThemeProvider>
      <Layout>
        <DefaultSeo {...defaultSeoProps} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
