import React from "react";

const Projects = () => {
	return (
		<section id="portfolio" class="offset">
			<div class="custom-container portfolio-styles">
				<div class="portfolioTitle">
					<small>Recent Works</small>
					<h2>Portfolio</h2>
					<hr class="underline-section" />
				</div>
				<div class="portfolio-tabs">
					<span class="portfolio-tabs-ind active" data-category="all">
						All
					</span>
					<span class="portfolio-tabs-ind" data-category="projects">
						Projects
					</span>
					<span class="portfolio-tabs-ind" data-category="freelance">
						Freelance
					</span>
				</div>
				<div class="showcase"></div>
			</div>
		</section>
	);
};

export default Projects;
