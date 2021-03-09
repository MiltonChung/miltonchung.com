import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
	return (
		<div className="home">
			<Landing />
			<About />
			<Projects />
			<Skills />
		</div>
	);
};

export default Home;
