import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../sanity';
import { LoadingIcon } from './LoadingIcon';
import Link from 'next/link';
import { FComponent } from '../types/commons';
import { GithubIcon } from '../Icons';

type FeaturedProjectsProps = {
  featuredProjects: {
    _id: string;
    title: string;
    skills: string[];
    description: string;
    githubLink: string;
    liveLink: string;
    order: number;
    featured: boolean;
    projectPicture: {
      asset: {
        _id: string;
        url: string;
      };
      alt: string;
    };
  }[];
  loading: boolean;
};

const FeaturedProjects: FComponent<FeaturedProjectsProps> = ({
  featuredProjects,
  loading
}) => {
  return (
    <>
      {featuredProjects.map(item => (
        <div className="featured" key={item._id}>
          <div className="featured-img">
            <div className="overlap-img">
              <a
                rel="noreferrer"
                target="_blank"
                href={item.liveLink}
                title="Go to website">
                {loading ? (
                  <LoadingIcon />
                ) : (
                  <img
                    src={item.projectPicture.asset.url}
                    alt="acm"
                    width="694.84px"
                    height="401.23px"
                  />
                )}
              </a>
            </div>
          </div>
          <div className="featured-content">
            <h3 className="featured-title">{item.title}</h3>
            <div className="featured-pills">
              {item.skills.map(skill => (
                <span className="featured-pill" key={Math.random()}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="featured-description">
              <BlockContent
                blocks={item.description}
                projectId="w8nlqrwa"
                dataset="production"
              />
            </div>
            <div className="featured-buttons">
              {item.githubLink && (
                <a
                  className="btn-portfolio"
                  target="_blank"
                  href={item.githubLink}
                  rel="noreferrer">
                  <GithubIcon /> Code
                </a>
              )}
              {item.liveLink && (
                <a
                  className="btn-portfolio"
                  rel="noreferrer"
                  target="_blank"
                  href={item.liveLink}>
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}{' '}
    </>
  );
};

const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, []);

  return (
    <div className="custom-container portfolio-styles">
      <div className="portfolioTitle">
        <small>Featured Works</small>
        <h2>Portfolio</h2>
        <div className="underline-section" />
      </div>
      <div className="showcase">
        <FeaturedProjects featuredProjects={featuredProjects} loading={loading} />
      </div>
      <Link href="/projects" className="see-more-button" id="project">
        ...see more projects!
      </Link>
    </div>
  );
};

export { Projects };
