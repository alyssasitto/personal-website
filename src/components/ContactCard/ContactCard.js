import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import axios from "axios";

require("./ContactCard.css");

const ContactCard = () => {
	const API_URL = process.env.REACT_APP_API_URL;

	const [ref, { entry }] = useIntersectionObserver({ threshold: 0.2 });
	const isVisible = entry && entry.isIntersecting;
	const [inView, setInView] = useState("");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
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
		e.preventDefault();

		setErrMessage(null);
		setSuccessMessage(null);

		setLoading(true);

		const body = {
			name,
			email,
			message,
		};

		axios
			.post(`${API_URL}/contact`, body)
			.then((response) => {
				setLoading(false);
				setName("");
				setEmail("");
				setMessage("");
				setSuccessMessage(response.data.message);
			})
			.catch((err) => {
				setLoading(false);
				setErrMessage(err.response.data.err);
			});
	};

	useEffect(() => {
		if (isVisible) {
			setInView("fade-in");
		}
	}, [isVisible]);

	return (
		<form
			ref={ref}
			onSubmit={handleSubmit}
			id="contact"
			className={`contact-form ${inView}`}
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

			{loading && (
				<img
					src="images/loading.gif"
					className="loading-gif"
					alt="Loading gif"
				/>
			)}
			{successMessage && <p className="success-msg">{successMessage}</p>}
			{errMessage && <p className="err-msg">{errMessage}</p>}

			<button type="submit">Send</button>
		</form>
	);
};

export default ContactCard;
