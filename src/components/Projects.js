import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ACM from "../assets/acm.png";

const Projects = () => {
	return (
		<Element id="portfolio" className="offset">
			<div className="custom-container portfolio-styles">
				<div className="portfolioTitle">
					<small>Featured Works</small>
					<h2>Portfolio</h2>
					<hr className="underline-section" />
				</div>
				<div className="showcase">
					<div className="featured">
						<div className="featured-img">
							<div className="overlap-img">
								<img src={ACM} alt="acm" />
							</div>
						</div>
						<div className="featured-content">
							<h3 className="featured-title">
								UC Santa Cruz: Association for Computing Machinery(ACM) Club Website
							</h3>
							<div className="featured-pills">
								<span className="featured-pill">html</span>
								<span className="featured-pill">html</span>
								<span className="featured-pill">html</span>
							</div>
							<p className="featured-description">
								A simple website that allows new and returning students to learn about the ACM club and
								keep them updated on upcoming events. Implemented using React for frontend and Sanity.io
								for headless content management system that allows current board members to edit/add
								events and member information without touching code
							</p>
							<div className="featured-buttons">
								<a
									className="btn-portfolio"
									target="_blank"
									href="https://github.com/MiltonChung/PersonalWebsiteV2/blob/main/js/loadModals.js"
									rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} /> Code
								</a>
								<a
									className="btn-portfolio"
									rel="noreferrer"
									target="_blank"
									href="https://ucscacm.netlify.app/">
									Live demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Projects;
