import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<footer id="footer">
			<button className="scroll-to-top" onClick={scrollToTop}>
				Back to top
			</button>
			<div className="icon-set">
				<div className="social">
					<a href="https://github.com/miltonchung" target="_blank" rel="noreferrer" title="Github">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>

				<div className="social">
					<a
						href="https://www.linkedin.com/in/miltonchung/"
						target="_blank"
						rel="noreferrer"
						title="Linkedin">
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</div>
			</div>
			<div className="credit">
				<small>Designed and created by Milton Chung &copy; {currentYear}</small>
			</div>
		</footer>
	);
};

export default Footer;
