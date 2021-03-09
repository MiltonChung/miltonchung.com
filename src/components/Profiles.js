import React from "react";
import FrontendMentor from "../assets/frontendmentor_logo.png";
import Edabit from "../assets/edabit_logo.png";
import Exercism from "../assets/exercism-logo.png";
import HackerRank from "../assets/svg/hackerrank.svg";
import Codepen from "../assets/svg/codepen.svg";

const Profiles = () => {
	return (
		<section id="web">
			<div className="custom-container web-styles">
				<div className="webTitle">
					<small>Links to my profiles</small>
					<h2>Coding Challenge Websites</h2>
					<div className="underline-section"></div>
				</div>
				<div className="web-container">
					<div className="profile">
						<img src={FrontendMentor} alt="frontend mentor logo" />
						<a href="https://www.frontendmentor.io/profile/MiltonChung" target="_blank" rel="noreferrer">
							Frontend Mentor
						</a>
					</div>
					<div className="profile">
						<img src={Edabit} alt="edabit logo" />
						<a href="https://edabit.com/user/CY5fcK7kzoo56Ysmr" target="_blank" rel="noreferrer">
							Edabit
						</a>
					</div>
					<div className="profile">
						<img src={Exercism} alt="exercism logo" />
						<a href="https://exercism.io/profiles/MiltonChung" target="_blank" rel="noreferrer">
							Exercism
						</a>
					</div>
					<div className="profile">
						<img src={HackerRank} alt="Hackerrank logo" />
						<a href="https://www.hackerrank.com/miltonjchung?hr_r=1" target="_blank" rel="noreferrer">
							HackerRank
						</a>
					</div>
					<div className="profile">
						<img src={Codepen} alt="codepen logo" />
						<a href="https://codepen.io/miltonchung" target="_blank" rel="noreferrer">
							Codepen
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profiles;
