import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

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
						{/* <a className="nav-link" href="/#about">
							About
						</a> */}
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
						<a className="nav-link" href="/#portfolio">
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/#skills">
							Skills
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
