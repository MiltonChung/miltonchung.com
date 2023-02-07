import Link from 'next/link';
import * as React from 'react';
import useScrollSpy from 'react-use-scrollspy';
import { Skills } from '../src/components/Skills';
import { useToggle } from '../src/hooks/useToggle';
import { Contact } from '../src/components/Contact';
import { Profiles } from '../src/components/Profiles';
import { Projects } from '../src/components/Projects';
import { MOBILE_WIDTH } from '../src/utils/constants';
import { useWindowDimensions } from '../src/hooks/useWindowDimensions';
import { GithubIcon, HamburgerIcon, LinkedinIcon } from '../src/Icons';
import { AboutMe } from '../src/components/AboutMe';

const Home = () => {
  const [isMenuOpen, toggleMenuOpen] = useToggle(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const { width } = useWindowDimensions();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (width > MOBILE_WIDTH && isMenuOpen) {
      toggleMenuOpen();
    }
  }, [width, isMenuOpen]);

  const sectionRefs = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null)
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -55
  });

  return (
    <main className="home" ref={sectionRefs[0]}>
      <nav className={scrollPosition > 499 ? 'affix' : null} id="homeNav">
        <Link href="#landing" scroll={false} className="navbar-brand font-bold">
          Milton Chung
        </Link>
        <button className="menu-button" onClick={toggleMenuOpen}>
          <HamburgerIcon />
        </button>

        <div className={isMenuOpen ? 'nav-links-m' : 'nav-links'}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                className={activeSection === 1 ? 'nav-link active-nav' : 'nav-link'}
                href="#about"
                scroll={false}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={activeSection === 2 ? 'nav-link active-nav' : 'nav-link'}
                scroll={false}
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                href="#portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={activeSection === 3 ? 'nav-link active-nav' : 'nav-link'}
                scroll={false}
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                href="#skills">
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={activeSection === 4 ? 'nav-link active-nav' : 'nav-link'}
                scroll={false}
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section role="banner" id="landing" ref={sectionRefs[0]}>
        {/* <Image className="landing-image" src={LandingImage} alt="landing" priority /> */}
        <div className="landing-container">
          <h1>Milton Chung</h1>
          <h2>Front-End Engineer</h2>

          <div className="landing-buttons-row">
            <Link className="btn-outline-square" href="#portfolio" scroll={false}>
              Portfolio
            </Link>
            <Link className="btn-outline-square" href="#contact" scroll={false}>
              Contact
            </Link>
          </div>

          <div className="landing-icons-row">
            <Link
              href="https://github.com/miltonchung"
              target="_blank"
              rel="noreferrer nofollow"
              title="Github">
              <GithubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/miltonchung/"
              target="_blank"
              rel="noreferrer nofollow"
              title="LinkedIn">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="about" id="about" className="offset" ref={sectionRefs[1]}>
        <AboutMe />
      </section>

      <section
        aria-label="portfolio"
        id="portfolio"
        className="offset"
        ref={sectionRefs[2]}>
        <Projects />
      </section>

      <section aria-label="skills" id="skills" className="offset" ref={sectionRefs[3]}>
        <Skills />
      </section>

      <section aria-label="contact" id="contact" className="offset" ref={sectionRefs[4]}>
        <Contact />
      </section>

      <section aria-label="profiles" id="profiles" ref={sectionRefs[5]}>
        <Profiles />
      </section>

      {/* Add certifications and links */}
    </main>
  );
};

export default Home;
