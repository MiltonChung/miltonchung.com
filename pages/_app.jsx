import '../src/styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import * as React from 'react';
import { Footer } from '../src/components/Footer';

const App = ({ Component, pageProps }) => {
  React.useEffect(() => {
    document.cookie = 'sameSite=None; Secure';
  }, []);

  return (
    <div id="root">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
