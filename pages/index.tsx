import Link from 'next/link';
import * as React from 'react';
import { Skills } from '../src/components/Skills';
import { Link as ScrollLink } from 'react-scroll';
import { useToggle } from '../src/hooks/useToggle';
import { AboutMe } from '../src/components/AboutMe';
import { Contact } from '../src/components/Contact';
import { Profiles } from '../src/components/Profiles';
import { Projects } from '../src/components/Projects';
import { MOBILE_WIDTH } from '../src/utils/constants';
import { useWindowDimensions } from '../src/hooks/useWindowDimensions';
import { GithubIcon, HamburgerIcon, LinkedinIcon } from '../src/Icons';

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

  return (
    <main className="home">
      <nav className={scrollPosition > 499 ? 'affix' : null} id="home-nav">
        <ScrollLink
          to="landing"
          spy={true}
          smooth={true}
          duration={1000}
          delay={100}
          className="navbar-brand font-bold">
          Milton Chung
        </ScrollLink>
        <button className="menu-button" onClick={toggleMenuOpen}>
          <HamburgerIcon />
        </button>

        <div className={isMenuOpen ? 'nav-links-m' : 'nav-links'}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                activeClass="active-nav"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}>
                About
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                activeClass="active-nav"
                className="nav-link"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}>
                Portfolio
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                activeClass="active-nav"
                className="nav-link"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}>
                Skills
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                onClick={width <= 768 ? () => toggleMenuOpen() : null}
                activeClass="active-nav"
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>

      <section aria-label="landing" id="landing" role="banner">
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

      <section aria-label="about" id="about" className="offset">
        <AboutMe />
      </section>

      <section aria-label="portfolio" id="portfolio" className="offset">
        <Projects />
      </section>

      <section aria-label="skills" id="skills" className="offset">
        <Skills />
      </section>

      <section aria-label="contact" id="contact" className="offset">
        <Contact />
      </section>

      <section aria-label="profiles" id="profiles">
        <Profiles />
      </section>

      {/* Add certifications and links */}
    </main>
  );
};

export default Home;
