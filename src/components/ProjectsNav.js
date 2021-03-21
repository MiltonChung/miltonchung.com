import React from "react";
import { Link } from "react-router-dom";

const ProjectsNav = () => {
	return (
		<nav className="projects-nav">
			<Link to="/" className="project-navbar-brand">
				Milton Chung
			</Link>
			<ul>
				<li>
					<Link to="/" className="navbar-back-home">
						back
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default ProjectsNav;
