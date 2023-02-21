import Link from 'next/link';
import * as React from 'react';
import { GithubIcon } from '../Icons';
import { Pills } from './common/Pills';
import { FeaturedProject } from '../../pages';
import BlockContent from '@sanity/block-content-to-react';
import type { FComponent } from '../types/commons';

type ProjectsProps = {
  featuredProjects: FeaturedProject[];
};

const Projects: FComponent<ProjectsProps> = ({ featuredProjects = [] }) => {
  return (
    <div className="portfolio-wrapper custom-container ">
      <div className="section-title">
        <small>Featured Works</small>
        <h2>Portfolio</h2>
        <div className="underline-section" />
      </div>

      <div className="portfolio-projects-showcase">
        {featuredProjects.map((item, index) => (
          <React.Fragment key={item._id}>
            <div className="featured-project">
              <div className="project-img">
                <a
                  className="project-img-link"
                  rel="noreferrer nofollow"
                  target="_blank"
                  href={item.liveLink}
                  title="Go to website">
                  <div className="background-blue" />
                  <img src={item.projectPicture.asset.url} alt="acm project" />
                </a>
              </div>

              <div className="project-content">
                <h3 className="title">{item.title}</h3>
                <Pills pills={item.skills} />

                <div className="description">
                  <BlockContent
                    blocks={item.description}
                    projectId="w8nlqrwa"
                    dataset="production"
                  />
                </div>

                <div className="button-row">
                  {item.githubLink && (
                    <a
                      className="btn-dark-primary"
                      target="_blank"
                      href={item.githubLink}
                      rel="noreferrer nofollow">
                      <GithubIcon /> Code
                    </a>
                  )}
                  {item.liveLink && (
                    <a
                      className="btn-dark-primary"
                      rel="noreferrer nofollow"
                      target="_blank"
                      href={item.liveLink}>
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            {index !== featuredProjects.length - 1 && <div className="border-bottom" />}
          </React.Fragment>
        ))}
      </div>

      <Link href="/projects" className="btn-blue-primary">
        ...see more projects!
      </Link>
    </div>
  );
};

export { Projects };
