import Link from 'next/link';
import * as React from 'react';
import sanityClient from '../sanity';
import { GithubIcon } from '../Icons';
import { LoadingIcon } from './LoadingIcon';
import BlockContent from '@sanity/block-content-to-react';
import type { FComponent, SanityAsset } from '../types/commons';
import { Pills } from './Pills';

type Project = {
  _id: string;
  title: string;
  skills: string[];
  description: string;
  githubLink: string;
  liveLink: string;
  order: number;
  featured: boolean;
  projectPicture: SanityAsset;
};

type FeaturedProjectsProps = {
  featuredProjects: Project[];
  isLoading: boolean;
};

const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[_type == "projects" && featured == true] | order(order desc) {
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
      )
      .then(data => {
        setFeaturedProjects(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-wrapper custom-container ">
      <div className="section-title">
        <small>Featured Works</small>
        <h2>Portfolio</h2>
        <div className="underline-section" />
      </div>

      <FeaturedProjects featuredProjects={featuredProjects} isLoading={isLoading} />

      <Link href="/projects" className="see-more-button">
        ...see more projects!
      </Link>
    </div>
  );
};

const FeaturedProjects: FComponent<FeaturedProjectsProps> = ({
  featuredProjects,
  isLoading
}) => {
  return (
    <div className="portfolio-projects-showcase">
      {isLoading ? (
        <LoadingIcon />
      ) : (
        featuredProjects.map((item, index) => (
          <>
            <div className="featured-project" key={item._id}>
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
                      className="btn-portfolio"
                      target="_blank"
                      href={item.githubLink}
                      rel="noreferrer nofollow">
                      <GithubIcon /> Code
                    </a>
                  )}
                  {item.liveLink && (
                    <a
                      className="btn-portfolio"
                      rel="noreferrer nofollow"
                      target="_blank"
                      href={item.liveLink}>
                      Live demo
                    </a>
                  )}
                </div>
              </div>

              {/* add border below except last one */}
            </div>
            {index !== featuredProjects.length - 1 && <div className="border-bottom" />}
          </>
        ))
      )}
    </div>
  );
};

export { Projects };
