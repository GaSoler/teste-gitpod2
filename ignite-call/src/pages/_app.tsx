import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';

import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react'

import { queryClient } from '../lib/react-query';

export default function App({
  Component,  
  pageProps: { session, ...pageProps},
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'http://localhost:3000',
            siteName: 'Ignite Call',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
