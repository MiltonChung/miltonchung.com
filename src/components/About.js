import React from "react";
import Milton from "../assets/me-opt.jpg";
import Resume from "../assets/Milton_Chung_Resume_2021.pdf";
import { Element } from "react-scroll";

const About = () => {
	return (
		<Element id="about" className="offset">
			<div className="about-wrapper custom-container">
				{/* <div className="blue-bg"></div> */}
				<div className="profile-pic">
					<img src={Milton} alt="Milton" />
				</div>
				<div className="about-text">
					<div className="about-title">
						<small>A little</small>
						<h2>About me</h2>
						<div className="underline-section"></div>
					</div>
					<p>
						I am a recent graduate from the University of California, Santa Cruz with Bachelor of Arts in
						Computer Science and Bachelor of Sciences in Cognitive Science. I'm currently a student at
						Nucamp Coding Bootcamp studying to become a MERN full stack developer. I have experience
						building websites from the ground up using plain HTML, CSS, and JavaScript, but also using
						more advanced frameworks and technologies like React, Sass, and Bootstrap to make my websites
						to the next level. Designing and building websites is my passion and I want to bring designs
						to life for the world to see.
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
