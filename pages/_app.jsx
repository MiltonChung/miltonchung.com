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
        <meta name="theme-color" content="#2f2e41" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:image"
          content="https://miltonchung.com/assets/og_preview.png"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1406" />
        <meta property="og:image:height" content="792" />
        <meta
          property="og:image:alt"
          content="Milton Chung's personal portfolio website"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miltonchung.com/" />
        <meta property="og:title" content="Milton Chung | Frontend Engineer" />
        <meta
          property="og:description"
          content="Hi! I'm Milton and I'm passionate about frontend development (and latte art)."
        />

        <meta
          name="keywords"
          content="Milton Chung, HTML, CSS, portfolio, website, personal, ucsc, Milton, Chung, React, Typescript, Sass, Javascript, convex, frontend, engineer, developer, front-end, front end, front end developer, front-end developer"
        />
        <meta
          name="description"
          content="Hey! I'm a web developer passionate about frontend development (and latte art!) with technologies like React, TypeScript, and Sass. Come say hi!"
        />
        <meta name="author" content="Milton Chung" />

        <title>Milton Chung | Frontend Engineer</title>
      </Head>

      <div id="root">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default App;
