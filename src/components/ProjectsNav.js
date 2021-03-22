import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ProjectsNav = () => {
	return (
		<nav className="projects-nav">
			<Link to="/" className="project-navbar-brand">
				Milton Chung
			</Link>
			<ul>
				<li>
					<HashLink to="/#portfolio" className="navbar-back-home">
						back
					</HashLink>
				</li>
			</ul>
		</nav>
	);
};

export default ProjectsNav;
