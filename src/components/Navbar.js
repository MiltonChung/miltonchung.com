import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	function toggleMenu() {
		setMenu(!menu);
	}

	return (
		<nav className="fixed-top">
			<a class="navbar-brand" href="#">
				Milton Chung
			</a>
			<button className="menu-button" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>

			<div className={menu ? "nav-links-m" : "nav-links"}>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#about">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#skills">
							Skills
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
