require("./Header.css");

const Header = () => {
	return (
		<header className="padding-helper">
			<div>
				<h1>Hello, my name is</h1>
				<h2>Alyssa Sitto.</h2>
				<h3>I enjoy building things for the web.</h3>

				<p>
					I'm a frontend-focused web developer based in Southern California with
					a passion for creating aesthetically pleasing and user-friendly
					websites.
				</p>

				<button className="resume-btn">
					<a href="resume.pdf" target="_blank">
						Resumé
					</a>
				</button>
			</div>
		</header>
	);
};

export default Header;
