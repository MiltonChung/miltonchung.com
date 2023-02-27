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
          Hello there! I'm a highly motivated software engineer with a passion for
          front-end development. I graduated with highest Honors (top 15% of the
          graduation class) from UC Santa Cruz with degrees in both Computer Science and
          Cognitive Science. In addition, I am an Honors graduate from Nucamp Coding
          Bootcamp, where I completed the full-stack development curriculum.
          <br /> <br />
          Currently, I am working as a Software Engineer at TARTLE, where I focus on
          front-end development. My experience includes building websites from the ground
          up using plain HTML, CSS, and JavaScript, as well as utilizing more advanced
          frameworks and technologies like React, Sass, and TypeScript to take my websites
          to the next level. My goal is to bring designs to life and create seamless user
          experiences that leave a lasting impression.
          <br /> <br />
          When I'm not coding, I enjoy staying active and pursuing my hobbies. You can
          often find me playing video games such as League of Legends, making coffee and
          beautiful latte art, or participating in fitness activities such as
          kickboxing/Muay Thai, running, or other sports. I find that staying active and
          engaged in hobbies outside of work helps me maintain a healthy work-life balance
          and stay sharp and focused. It's important to me to always be learning and
          growing, both professionally and personally.
          <br /> <br />
          Throughout my career, I have consistently demonstrated a strong work ethic,
          attention to detail, and a commitment to quality. I enjoy collaborating with
          teams and I am always eager to learn new technologies and improve my skills. I
          am excited to take on new challenges and leverage my expertise to create
          innovative solutions that make a difference in the world.
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
