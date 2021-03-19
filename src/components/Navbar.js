import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import useWindowDimensions from "../components/useWindowDimensions";

// https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const { width } = useWindowDimensions();
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (width > 768 && menu) {
			setMenu(!menu);
		}
	}, [width, menu]);

	function toggleMenu() {
		setMenu(!menu);
	}

	return (
		<nav className={scrollPosition > 499 ? "fixed-top affix" : "fixed-top"}>
			{/* <a className="navbar-brand" href="/#"></a> */}
			<Link activeClass="active" className="navbar-brand" to="hero" spy={true} smooth={true} duration={1000}>
				Milton Chung
			</Link>
			<button className="menu-button" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<div className={menu ? "nav-links-m" : "nav-links"}>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link
							activeClass="active-nav"
							onClick={width <= 768 ? () => toggleMenu() : null}
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
							activeClass="active-nav"
							className="nav-link"
							onClick={width <= 768 ? () => toggleMenu() : null}
							to="portfolio"
							spy={true}
							smooth={true}
							duration={1000}>
							Portfolio
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active-nav"
							className="nav-link"
							onClick={width <= 768 ? () => toggleMenu() : null}
							to="skills"
							spy={true}
							smooth={true}
							duration={1000}>
							Skills
						</Link>
					</li>
					<li className="nav-item">
						<Link
							activeClass="active-nav"
							className="nav-link"
							onClick={width <= 768 ? () => toggleMenu() : null}
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
