import * as React from 'react';
import { certifications } from '../utils/constants';
import { Sparkles } from './Sparkles';

const Certification = () => {
  return (
    <div className="custom-container">
      <div className="section-title">
        <small>Professional qualifications</small>
        <h2>Certifications</h2>
        <div className="underline-section" />
      </div>

      <div className="certifications-container">
        {certifications.map(
          ({ logo: LogoComponent, link, name, issuer, date, credentialId }) => {
            return (
              <div className="certification-card" key={name}>
                <Sparkles />
                <div className="certification-left">
                  <span className="certification-date">{date}</span>
                  <span className="certification-name">{name}</span>
                  {credentialId ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer nofollow"
                      className="certification-id">
                      Credential ID: {credentialId}
                    </a>
                  ) : null}
                </div>
                <div className="certification-right">
                  <span className="certification-issuer">{issuer}</span>
                  <LogoComponent className="certification-logo" />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export { Certification };
