import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Landing = () => {
	return (
		<Element id="hero">
			<div className="header-container hero-styles">
				<h1>Hi! I'm Milton Chung.</h1>
				<h2>Front End Developer</h2>
				<div className="btn-row">
					<Link
						activeClass="active"
						className="btn-outline-square"
						to="portfolio"
						spy={true}
						smooth={true}
						duration={1000}>
						Portfolio
					</Link>
					<Link
						activeClass="active"
						className="btn-outline-square"
						to="contact"
						spy={true}
						smooth={true}
						duration={1000}>
						Contact
					</Link>
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
		</Element>
	);
};

export default Landing;
