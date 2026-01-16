import Link from 'next/link';
import * as React from 'react';
import sanityClient from '../src/sanity';
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
import type { FComponent, SanityAsset } from '../src/types/commons';
import { PortableTextBlock } from '@portabletext/react';

export type FeaturedProject = {
  _id: string;
  title: string;
  skills: string[];
  projectPicture: SanityAsset;
  order: number;
  liveLink: string;
  githubLink: string;
  featured: boolean;
  description: PortableTextBlock[];
};

type HomeProps = {
  featuredProjects: FeaturedProject[];
};

const Home: FComponent<HomeProps> = ({ featuredProjects }) => {
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
    <>
      <header aria-label="landing" id="landing">
        <div className="landing-container">
          <h1>Milton Chung</h1>
          <h2>Software Engineer - Web Platform</h2>

          <div className="landing-buttons-row">
            <ScrollLink
              className="btn-blue-secondary transparent"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={400}>
              View My Work
            </ScrollLink>
            <ScrollLink
              className="btn-blue-secondary transparent"
              to="contact"
              spy={true}
              smooth={true}
              duration={400}>
              Contact Me
            </ScrollLink>
          </div>

          <div className="landing-icons-row">
            <Link
              href="https://github.com/miltonchung"
              target="_blank"
              rel="noreferrer nofollow"
              title="Go to my Github">
              <GithubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/miltonchung/"
              target="_blank"
              rel="noreferrer nofollow"
              title="Go to my LinkedIn">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </header>

      <main className="home">
        <nav className={scrollPosition > 499 ? 'affix' : null} id="home-nav">
          <ScrollLink
            to="landing"
            spy={true}
            smooth={true}
            duration={1000}
            delay={100}
            className="navbar-brand">
            Milton Chung
          </ScrollLink>
          <button
            aria-label="hamberger menu"
            type="button"
            className="menu-button"
            onClick={toggleMenuOpen}>
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
                  duration={400}>
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
                  duration={400}>
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
                  duration={400}>
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
                  duration={400}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </nav>

        <section aria-label="about" id="about" className="offset">
          <AboutMe />
        </section>

        <section aria-label="portfolio" id="portfolio" className="offset">
          <Projects featuredProjects={featuredProjects} />
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
    </>
  );
};

export async function getStaticProps() {
  const featuredProjects = await sanityClient.fetch(
    `*[_type == "projects" && featured == true && showing == true] | order(order asc) {
					_id,
					title,
					skills,
					description,
					githubLink,
					liveLink,
					order,
					featured,
					projectPicture{
						asset->{
							_id,
							url
						},
						alt
					}
				}`
  );

  return {
    props: { featuredProjects }
  };
}

export default Home;
