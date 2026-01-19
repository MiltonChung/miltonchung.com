import * as React from 'react';
import { skills } from '../utils/constants';

const Skills = () => {
  return (
    <div className="custom-container">
      <div className="section-title">
        <small>What I know</small>
        <h2>Tools & Technologies</h2>
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
      </div>
    </div>
  );
};

export { Skills };
