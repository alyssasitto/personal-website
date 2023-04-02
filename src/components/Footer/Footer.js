require("./Footer.css");

const Footer = () => {
	return (
		<footer>
			<div className="socials">
				<a href="https://github.com/alyssasitto" target="_blank">
					<img src="images/github.svg" className="social"></img>
				</a>
				<a href="https://www.linkedin.com/in/alyssasitto" target="_blank">
					<img src="images/linkedin.svg" className="social"></img>
				</a>
				<a href="mailto:alyssasitto1@gmail.com" target="_blank">
					<img src="images/envelope.svg" className="social"></img>
				</a>
			</div>
			<small>Designed and Built by Alyssa Sitto</small>
		</footer>
	);
};

export default Footer;
