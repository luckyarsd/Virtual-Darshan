// pages/_app.tsx
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../styles/globals.css';  // adjust path if needed

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
