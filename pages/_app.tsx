import Head from 'next/head';
import * as React from 'react';
import '../src/styles/main.scss';
import Script from 'next/script';
import { Footer } from '../src/components/Footer';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
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
        <meta
          property="og:title"
          content="Milton Chung | Software Engineer - Web Platform"
        />
        <meta
          property="og:description"
          content="Software engineer focused on web platform development with experience building production web applications using React, TypeScript, and modern web technologies. Also into latte art!"
        />
        <meta
          name="keywords"
          content="Milton Chung, software engineer, frontend engineer, frontend developer, React developer, TypeScript, JavaScript, HTML, CSS, Sass, web developer, UI engineering, production web applications, portfolio, personal website, UC Santa Cruz"
        />
        <meta
          name="description"
          content="Hi! I'm Milton Chung, a web platform focused software engineer with professional experience building and maintaining production web applications using React, TypeScript, and Sass. Passionate about clean UI, thoughtful UX, and latte art."
        />
        <meta name="author" content="Milton Chung" />

        <title>Milton Chung | Software Engineer - Web Platform</title>
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8F7XZDNX4T" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8F7XZDNX4T');
        `}
      </Script>
      <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>

      <div id="root">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default App;
