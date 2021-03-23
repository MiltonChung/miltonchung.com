import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import sanityClient from "../sanity";
import ProjectsNav from "../components/ProjectsNav";
import ReactModal from "react-modal";
import placeholder from "../assets/placeholder.jpg";
import LoadingIcon from "../components/LoadingIcon";

// https://stackoverflow.com/questions/45536886/render-multiple-modals-correctly-with-map-in-react-bootstrap

ReactModal.setAppElement("#root");

const Modals = ({ tempProjectsArr, activeModal, hideModal }) => {
	return tempProjectsArr.map((item, index) => {
		return (
			<ReactModal
				key={item._id}
				closeTimeoutMS={200}
				contentLabel={item.title}
				className="Modal"
				overlayClassName="Overlay"
				isOpen={activeModal["activeModal"] === index}
				shouldCloseOnOverlayClick={true}
				onRequestClose={hideModal}>
				<button onClick={hideModal} className="modal-close">
					X
				</button>
				<div className="modal-container">
					<h3 className="modal-title">{item.title}</h3>

					<a href={item.liveLink} target="_blank" rel="noopener noreferrer" title="Go to website">
						{item.projectPicture.asset.url ? (
							<img className="modal-picture" src={item.projectPicture.asset.url} alt={item.title} />
						) : (
							<img className="modal-picture" src={placeholder} alt="placeholder" />
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
						<BlockContent blocks={item.description} projectId="w8nlqrwa" dataset="production" />
					</div>
					<div className="modal-buttons">
						{item.githubLink && (
							<a className="btn-portfolio" target="_blank" href={item.githubLink} rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} /> Code
							</a>
						)}
						{item.liveLink && (
							<a className="btn-portfolio" rel="noreferrer" target="_blank" href={item.liveLink}>
								Live demo
							</a>
						)}
					</div>
				</div>
			</ReactModal>
		);
	});
};

const ProjectsPage = () => {
	const [projects, setProjects] = useState([]);
	const [tempProjectsArr, setTempProjectsArr] = useState([]);
	const [activeModal, setActiveModal] = useState(0);
	const [activeButton, setActiveButton] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
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
				setLoading(false);
			});
	}, []);

	function clickHandler(e, index) {
		setActiveModal({ activeModal: index });
	}

	function hideModal() {
		setActiveModal({ activeModal: null });
	}

	function showAll() {
		setTempProjectsArr(projects);
		setActiveButton(0);
	}

	function showPersonal() {
		setActiveButton(1);
		setTempProjectsArr(
			projects.filter(item => {
				return item.type === "project";
			})
		);
	}

	function showFreelance() {
		setActiveButton(2);
		setTempProjectsArr(
			projects.filter(item => {
				return item.type === "freelance";
			})
		);
	}

	return (
		<div className="projects-page ">
			<ProjectsNav />
			<div className="breadcrumb">
				<Link to="/" className="breadcrumb-link">
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
						className={activeButton === 0 ? "filter-button selected" : "filter-button"}
						onClick={showAll}>
						All
					</button>
					<button
						className={activeButton === 1 ? "filter-button selected" : "filter-button"}
						onClick={showPersonal}>
						Personal
					</button>
					<button
						className={activeButton === 2 ? "filter-button selected" : "filter-button"}
						onClick={showFreelance}>
						Freelance
					</button>
				</div>
				<div className="all-projects-container">
					{loading ? (
						<LoadingIcon />
					) : (
						<>
							{tempProjectsArr.map((item, index) => {
								return (
									<button
										className="hoverTextBlur"
										key={item._id}
										onClick={e => clickHandler(e, index)}>
										<img
											className="hoverTextBlur-img"
											src={item.projectPicture.asset.url}
											alt={item.title}
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
				<Modals tempProjectsArr={tempProjectsArr} activeModal={activeModal} hideModal={hideModal} />
			</div>
		</div>
	);
};

export default ProjectsPage;
