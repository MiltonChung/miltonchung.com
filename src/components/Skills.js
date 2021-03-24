import React from "react";
import { Element } from "react-scroll";

import Bootstrap from "../assets/svg/bootstrap.svg";
import CSS from "../assets/svg/css.svg";
import Figma from "../assets/svg/figma.svg";
import HTML from "../assets/svg/html.svg";
import Java from "../assets/svg/java.svg";
import Javascript from "../assets/svg/javascript.svg";
import Nodejs from "../assets/svg/nodejs.svg";
import NPM from "../assets/svg/npm.svg";
import Python from "../assets/svg/python.svg";
import Reactsvg from "../assets/svg/react.svg";
import Sass from "../assets/svg/sass.svg";
import Sql from "../assets/svg/sql.svg";
import VSCode from "../assets/svg/vscode.svg";
import Sanity from "../assets/svg/sanity.svg";
import Postman from "../assets/svg/postman.svg";
import Mongoose from "../assets/svg/mongoose.png";
import MongoDB from "../assets/svg/mongodb.svg";
import Express from "../assets/svg/express.svg";

const Skills = () => {
	return (
		<Element id="skills" className="offset">
			<div className="custom-container skills-styles">
				<div className="skillsTitle">
					<small>What I know</small>
					<h2>My Skills</h2>
					<hr className="underline-section" />
				</div>
				<div className="skills-container">
					<div className="box">
						<img src={HTML} alt="HTML" />
						<p>HTML</p>
					</div>
					<div className="box">
						<img src={CSS} alt="CSS" />
						<p>CSS</p>
					</div>
					<div className="box">
						<img src={Bootstrap} alt="Bootstrap" />
						<p>Bootstrap</p>
					</div>
					<div className="box">
						<img src={Sass} alt="Sass" />
						<p>Sass</p>
					</div>
					<div className="box">
						<img src={Javascript} alt="Javascript" />
						<p>JavaScript</p>
					</div>
					<div className="box">
						<img src={Reactsvg} alt="React" />
						<p>React/React Native</p>
					</div>
					<div className="box">
						<img src={MongoDB} alt="Mongodb" />
						<p>MongoDB</p>
					</div>
					<div className="box">
						<img src={Mongoose} alt="Mongoose" className="mongoose" />
						<p>Mongoose</p>
					</div>
					<div className="box">
						<img src={Express} alt="Express" />
						<p>Express</p>
					</div>
					<div className="box">
						<img src={Nodejs} alt="Nodejs" />
						<p>Nodejs</p>
					</div>
					<div className="box">
						<img src={NPM} alt="NPM" />
						<p>NPM</p>
					</div>
					<div className="box">
						<img src={Java} alt="Java" />
						<p>Java</p>
					</div>
					<div className="box">
						<img src={Python} alt="Python" />
						<p>Python</p>
					</div>
					<div className="box">
						<img src={Sql} alt="SQL" />
						<p>SQL</p>
					</div>
					<div className="box">
						<img src={VSCode} alt="Visual Studio Code" />
						<p>Visual Studio Code</p>
					</div>
					<div className="box">
						<img src={Figma} alt="Figma" />
						<p>Figma</p>
					</div>
					<div className="box">
						<img src={Postman} alt="Postman" />
						<p>Postman</p>
					</div>
					<div className="box">
						<img src={Sanity} alt="Sanity" />
						<p>Sanity</p>
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Skills;
