import React from "react";
import { Element } from "react-scroll";

const Projects = () => {
	return (
		<Element id="portfolio" className="offset">
			<div className="custom-container portfolio-styles">
				<div className="portfolioTitle">
					<small>Recent Works</small>
					<h2>Portfolio</h2>
					<hr className="underline-section" />
				</div>
				<div className="portfolio-tabs">
					<span className="portfolio-tabs-ind active" data-category="all">
						All
					</span>
					<span className="portfolio-tabs-ind" data-category="projects">
						Projects
					</span>
					<span className="portfolio-tabs-ind" data-category="freelance">
						Freelance
					</span>
				</div>
				<div className="showcase"></div>
			</div>
		</Element>
	);
};

export default Projects;
