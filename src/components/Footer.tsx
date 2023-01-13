import * as React from 'react';
import { GithubIcon, LinkedinIcon } from '../Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer id="footer">
      <button className="scroll-to-top" onClick={scrollToTop}>
        Back to top
      </button>
      <div className="icon-set">
        <div className="social">
          <a
            href="https://github.com/miltonchung"
            target="_blank"
            rel="noreferrer"
            title="Github">
            <GithubIcon />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/miltonchung/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin">
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <div className="credit">
        <small>
          Created with{' '}
          <a href="http://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
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
