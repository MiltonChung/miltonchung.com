import React from "react";
import FrontendMentor from "../assets/frontendmentor_logo.png";
import Edabit from "../assets/edabit_logo.png";
import Exercism from "../assets/exercism-logo.png";
import HackerRank from "../assets/svg/hackerrank.svg";
import Codepen from "../assets/svg/codepen.svg";

const Profiles = () => {
	return (
		<section id="profiles">
			<div className="custom-container web-styles">
				<div className="webTitle">
					<small>Links to my profiles</small>
					<h2>Coding Challenge Websites</h2>
					<div className="underline-section"></div>
				</div>
				<div className="web-container">
					<div className="profile">
						<a href="https://www.frontendmentor.io/profile/MiltonChung" target="_blank" rel="noreferrer">
							<img src={FrontendMentor} alt="frontend mentor logo" width="45px" height="45px" />
							Frontend Mentor
						</a>
					</div>
					<div className="profile">
						<a href="https://edabit.com/user/CY5fcK7kzoo56Ysmr" target="_blank" rel="noreferrer">
							<img src={Edabit} alt="edabit logo" width="45px" height="45px" />
							Edabit
						</a>
					</div>
					<div className="profile">
						<a href="https://exercism.io/profiles/MiltonChung" target="_blank" rel="noreferrer">
							<img src={Exercism} alt="exercism logo" width="45px" height="45px" />
							Exercism
						</a>
					</div>
					<div className="profile">
						<a href="https://www.hackerrank.com/miltonjchung?hr_r=1" target="_blank" rel="noreferrer">
							<img src={HackerRank} alt="Hackerrank logo" width="45px" height="45px" />
							HackerRank
						</a>
					</div>
					<div className="profile">
						<a href="https://codepen.io/miltonchung" target="_blank" rel="noreferrer">
							<img src={Codepen} alt="codepen logo" />
							Codepen
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profiles;
