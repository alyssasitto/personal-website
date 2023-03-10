import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import axios from "axios";

require("./ContactCard.css");

function ContactCard() {
	const API_URL = process.env.REACT_APP_API_URL;

	const [ref, refInView] = useInView({ threshold: 0 });
	const [inView, setInView] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);
	const [errMessage, setErrMessage] = useState(null);

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		setErrMessage(null);
		setSuccessMessage(null);

		e.preventDefault();

		const body = {
			name,
			email,
			message,
		};

		axios
			.post(`${API_URL}/contact`, body)
			.then((response) => {
				setName("");
				setEmail("");
				setMessage("");
				setSuccessMessage(response.data.message);
			})
			.catch((err) => {
				setErrMessage(err.response.data.err);
			});
	};

	useEffect(() => {
		if (refInView) {
			setInView("fade-in");
		}
	}, [refInView]);

	return (
		<form
			ref={ref}
			onSubmit={handleSubmit}
			id="contact"
			className={"contact-form " + inView}
		>
			<h2>Contact me</h2>

			<div>
				<label htmlFor="name">Name</label>

				<input
					type="text"
					name="name"
					value={name}
					onChange={handleName}
					placeholder="Name"
				/>
			</div>

			<div>
				<label htmlFor="email">Email</label>

				<input
					type="text"
					name="email"
					value={email}
					onChange={handleEmail}
					placeholder="Email"
				/>
			</div>

			<div className="lol">
				<label htmlFor="message">Message</label>

				<textarea
					name="message"
					value={message}
					onChange={handleMessage}
					placeholder="Message..."
				/>
			</div>

			{successMessage && <p className="success-msg">{successMessage}</p>}
			{errMessage && <p className="err-msg">{errMessage}</p>}

			<button type="submit">Send</button>
		</form>
	);
}

export default ContactCard;
