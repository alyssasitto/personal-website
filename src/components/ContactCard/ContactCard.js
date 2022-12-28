require("./ContactCard.css");

function ContactCard() {
	return (
		<div className="contact-card">
			<h2>Get in touch</h2>
			<p>
				I'm currently looking for new opportunities so please email me if you
				have any positions you feel I'd be a great fit for. I will get back to
				you as as soon as possible.
				<a href="mailto:alyssasitto1@gmail.com" className="contact-btn">
					Contact me
				</a>
			</p>
		</div>
	);
}

export default ContactCard;
