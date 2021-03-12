import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

// https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	function toggleMenu() {
		setMenu(!menu);
	}

	return (
		<nav className="fixed-top">
			<a className="navbar-brand" href="/#">
				Milton Chung
			</a>
			<button className="menu-button" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>

			<div className={menu ? "nav-links-m" : "nav-links"}>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							activeClass="active"
							className="nav-link"
							to="about"
							spy={true}
							smooth={true}
							duration={1000}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active"
							className="nav-link"
							to="portfolio"
							spy={true}
							smooth={true}
							duration={1000}>
							Portfolio
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active"
							className="nav-link"
							to="skills"
							spy={true}
							smooth={true}
							duration={1000}>
							Skills
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active"
							className="nav-link"
							to="contact"
							spy={true}
							smooth={true}
							duration={1000}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
