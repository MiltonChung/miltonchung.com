import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import sanityClient from "../sanity";
import ProjectsNav from "../components/ProjectsNav";
import ReactModal from "react-modal";

// https://stackoverflow.com/questions/45536886/render-multiple-modals-correctly-with-map-in-react-bootstrap

ReactModal.setAppElement("#root");

const Modals = ({ tempProjectsArr, activeModal, hideModal }) => {
	return tempProjectsArr.map((item, index) => {
		return (
			<ReactModal
				key={item._id}
				isOpen={activeModal["activeModal"] === index}
				shouldCloseOnOverlayClick={true}
				onRequestClose={hideModal}>
				{item.title}
				<button onClick={hideModal}>close</button>
			</ReactModal>
		);
	});
};

const ProjectsPage = () => {
	const [projects, setProjects] = useState([]);
	const [tempProjectsArr, setTempProjectsArr] = useState([]);
	const [activeModal, setActiveModal] = useState(0);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "projects" && featured == false] | order(order asc) {
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
	}

	function showPersonal() {
		setTempProjectsArr(
			projects.filter(item => {
				return item.type === "project";
			})
		);
	}

	function showFreelance() {
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
					<button onClick={showAll}>All</button>
					<button onClick={showPersonal}>Personal</button>
					<button onClick={showFreelance}>Freelance</button>
				</div>
				<div className="all-projects-container">
					{tempProjectsArr.map((item, index) => {
						return (
							<button className="hoverTextBlur" key={item._id} onClick={e => clickHandler(e, index)}>
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
				</div>
				<Modals tempProjectsArr={tempProjectsArr} activeModal={activeModal} hideModal={hideModal} />
			</div>
		</div>
	);
};

export default ProjectsPage;
