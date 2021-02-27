import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';

import { StoreProvider } from '../contexts/store-context';

import { MenuView } from "../views";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Invoyz</title>
      <meta name="description" content="An invoice app using Nextjs" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <StoreProvider >
      <div className="relative flex h-screen bg-light">
        <section className="absolute left-0 top-0 right-0 lg:right-auto bottom-auto lg:bottom-0 h-20 lg:h-auto w-full lg:w-20">
          <MenuView />
        </section>

        <section className="pl-0 pt-20 lg:pl-20 lg:pt-0 overflow-y-auto w-full">
          <Component {...pageProps} />
        </section>
      </div>
    </StoreProvider>
  </>;
}

export default MyApp
