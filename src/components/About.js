import React from "react";
import Milton from "../assets/me.jpg";
import Resume from "../assets/Milton_Chung_Resume_2021.pdf";
import { Element } from "react-scroll";

const About = () => {
	return (
		<Element id="about" className="offset">
			<div className="about-wrapper custom-container">
				<div className="profile-pic">
					<img src={Milton} alt="Milton" width="480px" height="480px" />
				</div>
				<div className="about-text">
					<div className="about-title">
						<small>A little</small>
						<h2>About me</h2>
						<div className="underline-section"></div>
					</div>
					<p>
						I graduated from the University of California, Santa Cruz with Bachelor of Arts in Computer
						Science and Bachelor of Sciences in Cognitive Science. I'm a Honors graduate from Nucamp
						Coding Bootcamp with the focus of learning the MERN stack. I'm currently a fellow at Menon
						Labs working with their start-up partner Plant Jammer as a Frontend Developer. I have
						experience building websites from the ground up using plain HTML, CSS, and JavaScript, but
						also using more advanced frameworks and technologies like React, Sass, and Bootstrap to take
						my websites to the next level. Designing and building websites is my passion and I want to
						bring designs to life for the world to see.
					</p>

					<a href={Resume} target="_blank" rel="noreferrer" type="application/octet-stream">
						<span>My Resume</span>
					</a>
				</div>
			</div>
		</Element>
	);
};

export default About;
