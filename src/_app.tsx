// pages/_app.js

import { AppProps } from 'next/app';
import '@/themes/flounder/style.css';  // Global styles for the app
import '@/themes/flounder-child/style.css';  // Global styles for the app

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
