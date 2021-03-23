import React, { useState } from "react";
import LoadingIconTwo from "./LoadingIconTwo";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Element } from "react-scroll";
// Icons
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
	const [loading, setLoading] = useState(false);
	const { register, errors, handleSubmit, reset } = useForm();

	const toastifySuccess = () => {
		toast("🚀 Form sent! Thank you!", {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: "submit-feedback success",
			toastId: "notifyToast",
		});
	};

	const onSubmit = async data => {
		try {
			setLoading(true);
			const templateParams = {
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message,
			};

			await emailjs.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			);
			reset();
			toastifySuccess();
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Element id="contact" className="offset">
			<div className="custom-container contact-styles">
				<div className="contactTitle">
					<small>Let's talk!</small>
					<h2>Contact Me</h2>
					<hr className="underline-section" />
				</div>
				<div className="contact-body">
					<div className="contact-body-left">
						<form id="gform" name="gform" onSubmit={handleSubmit(onSubmit)} noValidate>
							<label>
								<p>Full Name:*</p>
								<input
									type="text"
									name="name"
									placeholder="Ecma Script"
									ref={register({
										required: { value: true, message: "Please enter your name" },
										maxLength: {
											value: 30,
											message: "Please use 30 characters or less",
										},
									})}
								/>
							</label>
							<small className="error-msg error">
								{errors.name && <span className="errorMessage">{errors.name.message}</span>}
							</small>

							<label>
								<p>Your Email:*</p>
								<input
									type="email"
									name="email"
									ref={register({
										required: true,
										pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
									})}
									placeholder="ecmascript@example.com"
								/>
							</label>
							<small className="error-msg error">
								{errors.email && (
									<span className="errorMessage">Please enter a valid email address</span>
								)}
							</small>

							<label>
								<p>Subject:*</p>
								<input
									type="text"
									name="subject"
									ref={register({
										required: { value: true, message: "Please enter a subject" },
										maxLength: {
											value: 75,
											message: "Subject cannot exceed 75 characters",
										},
									})}
									placeholder="Job Opening!"
								/>
							</label>
							<small className="error-msg error">
								{errors.subject && <span className="errorMessage">{errors.subject.message}</span>}
							</small>

							<label>
								<p>Your message:*</p>
								<textarea
									name="message"
									ref={register({
										required: true,
									})}
									cols="30"
									rows="8"
									placeholder="Hello world!"></textarea>
							</label>
							<small className="error-msg error">
								{errors.message && <span className="errorMessage">Please enter a message</span>}
							</small>

							{loading ? (
								<button disabled id="contactButton">
									<LoadingIconTwo />
								</button>
							) : (
								<button type="submit" id="contactButton">
									Send Message
								</button>
							)}
						</form>
						<ToastContainer />
						<h3>- OR -</h3>

						<div className="myEmail">
							<a href="mailto:hchung14@ucsc.edu" rel="noreferrer" className="tooltip">
								miltonjchung@gmail.com
								<span className="email-tooltip-text">Open Mail app</span>
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
		</Element>
	);
};

export default Contact;
