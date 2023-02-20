import Image from 'next/image';
import * as React from 'react';
import { profiles } from '../utils/constants';

const Profiles = () => {
  return (
    <div className="custom-container">
      <div className="section-title-white always-white">
        <small>Links to my profiles</small>
        <h2>Find Me On</h2>
        <div className="underline-section" />
      </div>

      <div className="profiles-container">
        {profiles.map(({ logo: Logo, link, name, alt }) => {
          return (
            <div className="profile" key={name}>
              <a href={link} target="_blank" rel="noreferrer nofollow">
                {Logo.src ? <Image src={Logo} alt={alt} /> : <Logo />}
                <span>{name}</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Profiles };
