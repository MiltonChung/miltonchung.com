import React, { useState } from "react";
import ContactIllustration from "../assets/svg/contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const CopyText = setCopyStatus => {
	const email = "miltonjchung@gmail.com";
	navigator.clipboard.writeText(email).then(
		function () {
			setCopyStatus(true);
		},
		function (err) {
			console.error("Async: Could not copy text: ", err);
		}
	);
};

const Contact = () => {
	const [copyStatus, setCopyStatus] = useState(false);

	return (
		<section id="contact" className="offset">
			<div className="custom-container contact-styles">
				<div className="contactTitle">
					<small>Let's talk!</small>
					<h2>Contact Me</h2>
					<hr className="underline-section" />
				</div>
				<div className="contact-body">
					<div className="contact-body-left">
						{/* <!-- https://docs.google.com/forms/d/e/1FAIpQLSeWdNgFLDh-ZW7SSYHpY5iM13K62ksyF5xW-QsYshbUv4Tv6Q/viewform?usp=pp_url&entry.49473630=testName&entry.610198788=testEmail&entry.2083211948=testMessage -->
						<!-- https://docs.google.com/forms/d/e/1FAIpQLSeWdNgFLDh-ZW7SSYHpY5iM13K62ksyF5xW-QsYshbUv4Tv6Q/viewform?usp=pp_url&entry.49473630=1&entry.610198788=2&entry.2083211948=3 --> */}
						<form
							id="gform"
							name="gform"
							target="hidden_iframe"
							onSubmit="return validateForm(event);"
							action="https://docs.google.com/forms/d/e/1FAIpQLSeWdNgFLDh-ZW7SSYHpY5iM13K62ksyF5xW-QsYshbUv4Tv6Q/formResponse?">
							<label>
								<p>Full Name:*</p>
								<input
									type="text"
									name="entry.49473630"
									id="entry.49473630"
									placeholder="Ecma Script"
								/>{" "}
							</label>
							<small className="error-msg">Please enter a valid name</small>

							<label>
								<p>Email:*</p>
								<input
									type="email"
									name="entry.610198788"
									id="entry.610198788"
									placeholder="ecmascript@example.com"
								/>{" "}
							</label>
							<small className="error-msg">Please enter a valid email</small>

							<label>
								<p>Your message:*</p>
								<textarea
									name="entry.2083211948"
									id="entry.2083211948"
									cols="30"
									rows="8"
									placeholder="Hello world!"></textarea>
							</label>
							<small className="error-msg">Please enter a longer message</small>

							<button type="submit" id="contactButton">
								Send Message
							</button>
						</form>
						<iframe
							title="hidden_iframe"
							name="hidden_iframe"
							id="hidden_iframe"
							onLoad="if(submitted){console.log('sent')}"></iframe>
						<h3>- OR -</h3>
						<div className="myEmail">
							<a href="mailto:hchung14@ucsc.edu" title="Open Mail app" rel="noreferrer">
								miltonjchung@gmail.com
							</a>
							<button onClick={() => CopyText(setCopyStatus)} className="tooltip">
								<FontAwesomeIcon className="email" icon={faCopy} />
								<span className="tooltiptext" id="myTooltip">
									{copyStatus ? <>Copied to clipboard!</> : <>Copy to clipboard</>}
								</span>
							</button>
						</div>
					</div>
					<img src={ContactIllustration} alt="contact illustration" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
