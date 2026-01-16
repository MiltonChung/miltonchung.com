import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import ReactModal from 'react-modal';
import sanityClient from '../../src/sanity';
import { classNames } from '../../src/utils';
import { CloseIcon, GithubIcon } from '../../src/Icons';
import { Pills } from '../../src/components/common/Pills';
import placeholder from '../../public/assets/placeholder.jpg';
import { FComponent, SanityAsset } from '../../src/types/commons';
import { PortableText, PortableTextBlock } from '@portabletext/react';

ReactModal.setAppElement('#root');

type Project = {
  _id: string;
  title: string;
  skills: string[];
  description: PortableTextBlock[];
  githubLink: string;
  liveLink: string;
  order: number;
  type: 'project' | 'freelance';
  featured: boolean;
  projectPicture: SanityAsset;
};

type ProjectsProps = {
  allProjects: Project[];
};

const Projects: FComponent<ProjectsProps> = ({ allProjects }) => {
  const [tempProjectsArr, setTempProjectsArr] = React.useState<Project[]>(allProjects);
  const [activeModalIndex, setActiveModalIndex] = React.useState<number | null>(null);
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

  const onClickProject = (index: number) => {
    setActiveModalIndex(index);
  };

  const hideModal = () => {
    setActiveModalIndex(null);
  };

  const onChangeProject = (type?: Project['type']) => {
    if (type === 'project') {
      setActiveButtonIndex(1);
      setTempProjectsArr(
        allProjects.filter(item => {
          return item.type === 'project';
        })
      );
    } else if (type === 'freelance') {
      setActiveButtonIndex(2);
      setTempProjectsArr(
        allProjects.filter(item => {
          return item.type === 'freelance';
        })
      );
    } else {
      setActiveButtonIndex(0);
      setTempProjectsArr(allProjects);
    }
  };

  return (
    <main className="projects-page ">
      <nav id="projects-nav">
        <Link href="/" className="navbar-brand">
          Milton Chung
        </Link>

        <Link href="/#portfolio" className="nav-link">
          back
        </Link>
      </nav>

      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-link">
          Home
        </Link>
        <p className="breadcrumb-divider">/</p>
        <p className="breadcrumb-current">Projects</p>
      </div>

      <div className="all-projects custom-container">
        <div className="section-title">
          <small>All Recent Works</small>
          <h2>Portfolio</h2>
          <div className="underline-section" />
        </div>

        <div className="filter-button-row">
          <button
            type="button"
            className={classNames('filter-button', activeButtonIndex === 0 && 'selected')}
            onClick={() => onChangeProject()}>
            All
          </button>
          <button
            type="button"
            className={classNames('filter-button', activeButtonIndex === 1 && 'selected')}
            onClick={() => onChangeProject('project')}>
            Personal
          </button>
          <button
            type="button"
            className={classNames('filter-button', activeButtonIndex === 2 && 'selected')}
            onClick={() => onChangeProject('freelance')}>
            Freelance
          </button>
        </div>

        <div className="all-projects-container">
          {tempProjectsArr.map((item, index) => {
            return (
              <React.Fragment key={item._id}>
                <div className="project-card" onClick={() => onClickProject(index)}>
                  <img
                    className="project-card-img"
                    src={item.projectPicture.asset.url}
                    alt={item.title}
                  />
                  <div className="project-card-text">
                    <h2 className="project-card-title">{item.title}</h2>
                    <div className="project-card-description">
                      <Pills pills={item.skills} />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => onClickProject(index)}
                  className="mobile-card-description">
                  <h2 className="project-card-title">{item.title}</h2>
                  <div className="project-card-description">
                    <Pills pills={item.skills} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <Modals
          tempProjectsArr={tempProjectsArr}
          activeModalIndex={activeModalIndex}
          hideModal={hideModal}
        />
      </div>
    </main>
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
            className="modal-content"
            overlayClassName="modal-overlay"
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

              <Pills pills={item.skills} />

              <div className="modal-description">
                <PortableText value={item.description} />
              </div>

              <div className="modal-buttons">
                <button className="btn-dark-secondary" onClick={hideModal}>
                  Close
                </button>
                {item.githubLink ? (
                  <a
                    className="btn-dark-primary"
                    target="_blank"
                    href={item.githubLink}
                    rel="noreferrer">
                    <GithubIcon /> Code
                  </a>
                ) : null}
                {item.liveLink ? (
                  <a
                    className="btn-dark-primary"
                    rel="noreferrer"
                    target="_blank"
                    href={item.liveLink}>
                    Live demo
                  </a>
                ) : null}
              </div>
            </div>
          </ReactModal>
        ) : null;
      })}
    </>
  );
};

export async function getStaticProps() {
  const allProjects = await sanityClient.fetch(
    `*[_type == "projects" && showing == true] | order(order asc) {
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
  );

  return {
    props: { allProjects }
  };
}

export default Projects;
