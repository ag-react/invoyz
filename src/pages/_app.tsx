import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';
import "react-datepicker/dist/react-datepicker.css";

import { StoreProvider } from '../contexts/store-context';

import { MenuView } from "../views";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Invoyz</title>
      <meta name="description" content="A mobile responsive invoice web application with a light and dark theme support" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <StoreProvider >
      <div className="relative flex h-screen bg-light dark:bg-dark">
        <section className="absolute z-9999 left-0 top-0 right-0 lg:right-auto bottom-auto lg:bottom-0 h-18 md:h-20 lg:h-auto w-full lg:w-20">
          <MenuView />
        </section>

        <section className="pl-0 mt-18 md:mt-20 lg:pl-20 lg:mt-0 overflow-y-auto w-full">
          <Component {...pageProps} />
        </section>
      </div>
    </StoreProvider>
  </>;
}

export default React.memo(MyApp);
