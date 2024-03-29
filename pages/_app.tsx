import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../src/theme-provider';

export default function App({ Component, pageProps }: AppProps) {

  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Component {...pageProps} />
  </ThemeProvider>
}
