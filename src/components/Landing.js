import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
	return (
		<header id="hero">
			<div className="header-container hero-styles">
				<h1>Hi! I'm Milton Chung.</h1>
				<h2>Front End Developer</h2>
				<div className="btn-row">
					<a href="#portfolio" className="btn-outline-square" title="Portfolio">
						Portfolio
					</a>
					<a href="#contact" className="btn-outline-square" title="Contact">
						Contact
					</a>
				</div>
				<div className="icons">
					<a href="https://github.com/miltonchung" target="_blank" rel="noreferrer" title="Github">
						<FontAwesomeIcon icon={faGithub} />
					</a>

					<a
						href="https://www.linkedin.com/in/miltonchung/"
						target="_blank"
						rel="noreferrer"
						title="LinkedIn">
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Landing;
