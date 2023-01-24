import * as React from 'react';
import Link from 'next/link';

const ProjectsNav = () => {
  return (
    <nav className="projects-nav">
      <Link href="/" className="project-navbar-brand">
        Milton Chung
      </Link>
      <ul>
        <li>
          <Link href="/#portfolio" className="navbar-back-home">
            back
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { ProjectsNav };
