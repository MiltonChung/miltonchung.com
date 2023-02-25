import Image from 'next/image';
import * as React from 'react';
import { ExternalIcon } from '../Icons';
import MiltonProfile from '../../public/assets/images/me.jpg';

const AboutMe = () => {
  return (
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
          I graduated from the University of California, Santa Cruz with Bachelor of Arts
          in Computer Science and Bachelor of Sciences in Cognitive Science. I'm a Honors
          graduate from Nucamp Coding Bootcamp with the focus of learning the MERN stack.
          I'm currently a Jr. Software Engineer at TARTLE making the world a better place.
          I have experience building websites from the ground up using plain HTML, CSS,
          and JavaScript, but also using more advanced frameworks and technologies like
          React, Sass, and Bootstrap to take my websites to the next level. Designing and
          building websites is my passion and I want to bring designs to life for the
          world to see.
        </p>

        <a
          href="/assets/Milton_Chung_Resume.pdf"
          target="_blank"
          className="btn-blue-primary"
          rel="noreferrer nofollow"
          type="application/octet-stream">
          <span>My Resume</span>
          <ExternalIcon />
        </a>
      </div>
    </div>
  );
};

export { AboutMe };
