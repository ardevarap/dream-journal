// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../CSS/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
