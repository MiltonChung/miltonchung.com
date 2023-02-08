import Link from 'next/link';
import Image from 'next/image';
import ReactModal from 'react-modal';
import { CloseIcon } from '../../src/Icons';
import sanityClient from '../../src/sanity';
import React, { useEffect, useState } from 'react';
import placeholder from '../../public/assets/placeholder.jpg';
import { LoadingIcon } from '../../src/components/LoadingIcon';
import { FComponent, SanityAsset } from '../../src/types/commons';
import BlockContent, { BlockContentProps } from '@sanity/block-content-to-react';

// https://stackoverflow.com/questions/45536886/render-multiple-modals-correctly-with-map-in-react-bootstrap

// ReactModal.setAppElement('#root');

type Project = {
  _id: string;
  title: string;
  skills: string[];
  description: BlockContentProps;
  githubLink: string;
  liveLink: string;
  order: number;
  type: 'project' | 'freelance';
  featured: boolean;
  projectPicture: SanityAsset;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tempProjectsArr, setTempProjectsArr] = useState<Project[]>([]);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[_type == "projects"] | order(order desc) {
					_id,
					title,
					skills,
					description,
					githubLink,
					liveLink,
					order,
					type,
					featured,
					projectPicture{
						asset->{
							_id,
							url
						},
					}
				}`
      )
      .then(data => {
        setProjects(data);
        setTempProjectsArr(data);
        setIsLoading(false);
      });
  }, []);

  const onClickProject = (index: number) => {
    setActiveModalIndex(index);
  };

  const hideModal = () => {
    setActiveModalIndex(null);
  };

  const showAllProjects = () => {
    setTempProjectsArr(projects);
    setActiveButtonIndex(0);
  };

  const showPersonalProjects = () => {
    setActiveButtonIndex(1);
    setTempProjectsArr(
      projects.filter(item => {
        return item.type === 'project';
      })
    );
  };

  const showFreelanceProjects = () => {
    setActiveButtonIndex(2);
    setTempProjectsArr(
      projects.filter(item => {
        return item.type === 'freelance';
      })
    );
  };

  return (
    <div className="projects-page ">
      <nav id="projects-nav">
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

      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          Home
        </Link>
        <p className="breadcrumb-p">/</p>
        <p className="breadcrumb-p">Projects</p>
      </div>

      <div className="all-projects custom-container">
        <div className="portfolioTitle">
          <small>All Recent Works</small>
          <h2>Portfolio</h2>
          <hr className="underline-section" />
        </div>
        <div className="filter-button-row">
          <button
            className={
              activeButtonIndex === 0 ? 'filter-button selected' : 'filter-button'
            }
            onClick={showAllProjects}>
            All
          </button>
          <button
            className={
              activeButtonIndex === 1 ? 'filter-button selected' : 'filter-button'
            }
            onClick={showPersonalProjects}>
            Personal
          </button>
          <button
            className={
              activeButtonIndex === 2 ? 'filter-button selected' : 'filter-button'
            }
            onClick={showFreelanceProjects}>
            Freelance
          </button>
        </div>
        <div className="all-projects-container">
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <>
              {tempProjectsArr.map((item, index) => {
                return (
                  <button
                    className="hoverTextBlur"
                    key={item._id}
                    onClick={() => onClickProject(index)}>
                    <img
                      className="hoverTextBlur-img"
                      src={item.projectPicture.asset.url}
                      alt={item.title}
                      width="694.84px"
                      height="401.23px"
                    />
                    <div className="hoverTextBlur-text hoverTextBlur-blur">
                      <h2 className="hoverTextBlur-title">{item.title}</h2>
                      <h3 className="hoverTextBlur-description">
                        <div className="portfolio-descr-pills">
                          {item.skills.map(skill => (
                            <span className="portfolio-pills-ind" key={Math.random()}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </h3>
                    </div>
                  </button>
                );
              })}
            </>
          )}
        </div>
        <Modals
          tempProjectsArr={tempProjectsArr}
          activeModalIndex={activeModalIndex}
          hideModal={hideModal}
        />
      </div>
    </div>
  );
};

type ModalProps = {
  tempProjectsArr: Project[];
  activeModalIndex: number;
  hideModal: () => void;
};

const Modals: FComponent<ModalProps> = ({
  tempProjectsArr,
  activeModalIndex,
  hideModal
}) => {
  return (
    <>
      {tempProjectsArr.map((item, index) => {
        return activeModalIndex === index ? (
          <ReactModal
            key={item._id}
            closeTimeoutMS={200}
            contentLabel={item.title}
            className="Modal"
            overlayClassName="Overlay"
            isOpen={activeModalIndex === index}
            shouldCloseOnOverlayClick={true}
            onRequestClose={hideModal}>
            <button onClick={hideModal} className="modal-close">
              <CloseIcon />
            </button>
            <div className="modal-container">
              <h3 className="modal-title">{item.title}</h3>

              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Go to website">
                {item.projectPicture.asset.url ? (
                  <img
                    className="modal-picture"
                    src={item.projectPicture.asset.url}
                    alt={item.title}
                    width="694.84px"
                    height="401.23px"
                  />
                ) : (
                  <Image
                    className="modal-picture"
                    src={placeholder}
                    alt="placeholder"
                    width={694.84}
                    height={401.23}
                  />
                )}
              </a>
              <div className="modal-pills">
                {item.skills.map(skill => (
                  <span className="modal-pill" key={Math.random()}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="modal-description">
                <BlockContent
                  blocks={item.description}
                  projectId="w8nlqrwa"
                  dataset="production"
                />
              </div>
              <div className="modal-buttons">
                {item.githubLink && (
                  <a
                    className="btn-portfolio"
                    target="_blank"
                    href={item.githubLink}
                    rel="noreferrer">
                    GITHUB ICON Code
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
          </ReactModal>
        ) : null;
      })}
    </>
  );
};

export default Projects;
