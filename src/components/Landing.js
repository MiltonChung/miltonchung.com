import React from "react";

const Landing = () => {
	return (
		<header id="hero">
			<div class="header-container hero-styles">
				<h1>Hi! I'm Milton Chung.</h1>
				<h2>Front End Developer</h2>
				<div class="btn-row">
					<a href="#portfolio" class="btn-outline-square" title="Portfolio">
						Portfolio
					</a>
					<a href="#contact" class="btn-outline-square" title="Contact">
						Contact
					</a>
				</div>
				<div class="icons">
					<a href="https://github.com/miltonchung" target="_blank" rel="noreferrer" title="Github">
						<span class="iconify" data-inline="false" data-icon="fa:github"></span>
					</a>

					<a
						href="https://www.linkedin.com/in/miltonchung/"
						target="_blank"
						rel="noreferrer"
						title="LinkedIn">
						<span class="iconify" data-inline="false" data-icon="fa:linkedin-square"></span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Landing;
