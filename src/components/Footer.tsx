import * as React from 'react';
import { footerSocials } from '../utils/constants';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer id="footer">
      <button className="scroll-to-top" onClick={scrollToTop}>
        Back to top
      </button>

      <div className="social-container">
        {footerSocials.map(({ link, logo: Logo, title }) => {
          return (
            <a
              key={title}
              className="social"
              href={link}
              target="_blank"
              rel="noreferrer nofollow"
              title={title}>
              <Logo />
            </a>
          );
        })}
      </div>

      <div className="credit-container">
        <small>
          Created with{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{' '}
          +{' '}
          <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer">
            Sanity(headless CMS)
          </a>{' '}
          and hosted on{' '}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </small>
        <small>Designed and created by Milton Chung &copy; {currentYear}</small>
      </div>
    </footer>
  );
};

export { Footer };
