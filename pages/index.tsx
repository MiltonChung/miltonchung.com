import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import useScrollSpy from 'react-use-scrollspy';
import { useToggle } from '../src/hooks/useToggle';
import MiltonProfile from '../public/assets/images/me.jpg';
import { Contact } from '../src/components/Contact';
import { Projects } from '../src/components/Projects';
import { MOBILE_WIDTH } from '../src/utils/constants';
import { useWindowDimensions } from '../src/hooks/useWindowDimensions';
import LandingImage from '../public/assets/landing-opt.jpg';
import { skills } from '../src/utils/constants';
import {
  CodepenLogo,
  CssLogo,
  EdabitLogo,
  ExercismLogo,
  ExpressLogo,
  ExternalIcon,
  FigmaLogo,
  FrontendMentorLogo,
  GithubIcon,
  HackerRankLogo,
  HamburgerIcon,
  HtmlLogo,
  JavascriptLogo,
  LinkedinIcon,
  NodejsLogo,
  NpmLogo,
  PostmanLogo,
  PythonLogo,
  ReactLogo,
  SanityLogo,
  SassLogo,
  TypescriptLogo,
  VSCodeLogo
} from '../src/Icons';

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

      {/* Add certifications and links */}

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
        <div className="about-wrapper custom-container">
          <div className="about-me-pic">
            <Image src={MiltonProfile} alt="Milton profile shot" />
          </div>
          <div className="about-me-text-wrapper">
            <div className="section-title-white">
              <small>A little</small>
              <h2>About me</h2>
              <div className="underline-section" />
            </div>
            <p className="about-me-text">
              I graduated from the University of California, Santa Cruz with Bachelor of
              Arts in Computer Science and Bachelor of Sciences in Cognitive Science. I'm
              a Honors graduate from Nucamp Coding Bootcamp with the focus of learning the
              MERN stack. I'm currently a Jr. Software Engineer at TARTLE making the world
              a better place. I have experience building websites from the ground up using
              plain HTML, CSS, and JavaScript, but also using more advanced frameworks and
              technologies like React, Sass, and Bootstrap to take my websites to the next
              level. Designing and building websites is my passion and I want to bring
              designs to life for the world to see.
            </p>

            <a
              href="/assets/Milton_Chung_Resume.pdf"
              target="_blank"
              rel="noreferrer nofollow"
              type="application/octet-stream">
              <span>My Resume</span>
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        aria-label="portfolio"
        id="portfolio"
        className="offset"
        ref={sectionRefs[2]}>
        <Projects />
      </section>

      <section aria-label="skills" id="skills" className="offset" ref={sectionRefs[3]}>
        <div className="custom-container">
          <div className="section-title">
            <small>What I know</small>
            <h2>My Skills</h2>
            <div className="underline-section" />
          </div>

          <div className="skills-container">
            {skills.map(({ logo: Logo, link, name }) => {
              return (
                <div className="skill-box" key={name}>
                  <Logo />

                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </div>
              );
            })}

            {/* <div className="skill-box">
              <HtmlLogo />
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer">
                HTML
              </a>
            </div>
            <div className="skill-box">
              <CssLogo />
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer">
                CSS
              </a>
            </div>
            <div className="skill-box">
              <SassLogo />
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                Sass
              </a>
            </div>
            <div className="skill-box">
              <JavascriptLogo />
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer">
                JavaScript
              </a>
            </div>
            <div className="skill-box">
              <TypescriptLogo />
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer">
                TypeScript
              </a>
            </div>
            <div className="skill-box">
              <ReactLogo />
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React
              </a>
            </div>
            <div className="skill-box">
              <ExpressLogo />
              <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                Express
              </a>
            </div>
            <div className="skill-box">
              <NodejsLogo />
              <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                Nodejs
              </a>
            </div>
            <div className="skill-box">
              <NpmLogo />
              <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                npm
              </a>
            </div>
            <div className="skill-box">
              <PythonLogo />
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                Python
              </a>
            </div>
            <div className="skill-box">
              <VSCodeLogo />
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer">
                Visual Studio Code
              </a>
            </div>
            <div className="skill-box">
              <FigmaLogo />
              <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                Figma
              </a>
            </div>
            <div className="skill-box">
              <PostmanLogo />
              <a
                href="https://www.postman.com/"
                target="_blank"
                rel="noopener noreferrer">
                Postman
              </a>
            </div>
            <div className="skill-box">
              <SanityLogo />
              <a href="https://www.sanity.io/" target="_blank" rel="noopener noreferrer">
                Sanity
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section aria-label="contact" id="contact" className="offset" ref={sectionRefs[4]}>
        <Contact />
      </section>

      <section aria-label="profiles" id="profiles" ref={sectionRefs[5]}>
        <div className="custom-container web-styles">
          <div className="webTitle">
            <small>Links to my profiles</small>
            <h2>Coding Challenge Websites!</h2>
            <div className="underline-section"></div>
          </div>
          <div className="web-container">
            <div className="profile">
              <a
                href="https://www.frontendmentor.io/profile/MiltonChung"
                target="_blank"
                rel="noreferrer">
                <Image src={FrontendMentorLogo} alt="frontend mentor logo" />
                Frontend Mentor
              </a>
            </div>
            <div className="profile">
              <a
                href="https://edabit.com/user/CY5fcK7kzoo56Ysmr"
                target="_blank"
                rel="noreferrer">
                <Image src={EdabitLogo} alt="edabit logo" />
                Edabit
              </a>
            </div>
            <div className="profile">
              <a
                href="https://exercism.io/profiles/MiltonChung"
                target="_blank"
                rel="noreferrer">
                <Image src={ExercismLogo} alt="exercism logo" />
                Exercism
              </a>
            </div>
            <div className="profile">
              <a
                href="https://www.hackerrank.com/miltonjchung?hr_r=1"
                target="_blank"
                rel="noreferrer">
                <HackerRankLogo />
                HackerRank
              </a>
            </div>
            <div className="profile">
              <a href="https://codepen.io/miltonchung" target="_blank" rel="noreferrer">
                <CodepenLogo />
                Codepen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
