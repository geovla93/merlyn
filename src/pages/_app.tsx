import '../styles/globals.css';
import type { AppPropsWithLayout } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
