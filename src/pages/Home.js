import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Profiles from "../components/Profiles";
import HomeNav from "../components/HomeNav";

const Home = () => {
	return (
		<div className="home">
			<HomeNav />
			<Landing />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Profiles />
		</div>
	);
};

export default Home;
