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
          Hello there! I'm a software engineer with professional experience building and
          maintaining production web applications using React, TypeScript, Ruby on Rails,
          and Sass.
          <br /> <br />
          At TARTLE, I worked as a Software Engineer contributing to both customer-facing
          and internal features of a web application used by millions of users worldwide.
          I built React/TypeScript frontends, wrote Ruby on Rails backend functionality,
          and translated designs into polished and responsive UIs. On some projects, I
          designed UIs in Figma and implemented the features from design through
          production.
          <br /> <br />
          In addition, I owned the implementation and maintenance of marketing,
          transactional, and internal email systems, using SendGrid and custom-built email
          solutions to support product and business needs.
          <br /> <br />
          I have limited but hands-on exposure to AWS through an internal, mentored
          project. Recently, I've been expanding my skill set into cloud fundamentals with
          AWS, focusing on how frontend applications integrate with cloud services in
          production environments.
          <br /> <br />
          I'm currently seeking Frontend Engineer or Software Engineer roles where I can
          take on new challenges, contribute meaningfully to products, and continue
          growing as an engineer.
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
