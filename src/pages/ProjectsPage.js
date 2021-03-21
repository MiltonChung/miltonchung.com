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

const Modals = ({ projects, activeModal, hideModal }) => {
	return projects.map((item, index) => {
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
	const [activeModal, setActiveModal] = useState(0);

	function clickHandler(e, index) {
		setActiveModal({ activeModal: index });
	}

	function hideModal() {
		setActiveModal({ activeModal: null });
	}

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
			.then(data => setProjects(data));
	}, []);

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
				{projects.map((item, index) => {
					return (
						<button className="hoverTextBlur" key={item._id} onClick={e => clickHandler(e, index)}>
							<img className="hoverTextBlur-img" src={item.projectPicture.asset.url} alt={item.title} />
							<div class="hoverTextBlur-text hoverTextBlur-blur">
								<h2 class="hoverTextBlur-title">{item.title}</h2>
								<h3 class="hoverTextBlur-description">
									<div class="portfolio-descr-pills">
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
				<Modals projects={projects} activeModal={activeModal} hideModal={hideModal} />
			</div>
		</div>
	);
};

export default ProjectsPage;
