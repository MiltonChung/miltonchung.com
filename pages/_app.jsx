import Head from 'next/head';
import * as React from 'react';
import '../src/styles/main.scss';
import { Footer } from '../src/components/Footer';
import 'react-toastify/dist/ReactToastify.min.css';

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    document.cookie = 'sameSite=None; Secure';
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://miltonchung.com/landing.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="5472" />
        <meta property="og:image:height" content="3648" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miltonchung.com/" />
        <meta property="og:title" content="Milton Chung | Frontend Developer" />
        <meta property="og:description" content="Milton Chung's portfolio website" />

        <meta
          name="keywords"
          content="Milton Chung, HTML, CSS, portfolio, website, personal, ucsc, Milton, Chung"
        />
        <meta name="description" content="Milton Chung's personal portfolio website" />
        <meta name="author" content="Milton Chung" />

        <title>Milton Chung | Frontend Developer</title>
      </Head>

      <div id="root">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default App;
