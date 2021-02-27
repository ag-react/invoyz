import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Invoyz</title>
      <meta name="description" content="An invoice app using Nextjs" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <Component {...pageProps} />
  </>;
}

export default MyApp
