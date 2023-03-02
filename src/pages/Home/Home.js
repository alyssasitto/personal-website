import { useState } from "react";

import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContactCard from "../../components/ContactCard/ContactCard";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../../components/AboutMe/AboutMe";

require("./Home.css");

function Home() {
	const [navState, setNavState] = useState("");

	return (
		<div className={"home-page " + navState}>
			<Navbar navState={navState} setNavState={setNavState} />
			<header>
				<div className="header-container">
					<div className="header-content">
						<h1 className="fade-in">Hello, my name is</h1>
						<h2 className="fade-in">Alyssa Sitto.</h2>
						<h3 className="fade-in">I enjoy building things for the web.</h3>

						<p className="fade-in">
							I'm a frontend-focused web developer based in Southern California
							with a passion for creating aesthetically pleasing and
							user-friendly websites.
						</p>
					</div>

					<button className="resume-btn fade-in">
						<a href="https://1drv.ms/w/s!Ai9wUWsSlzZ1hzz4A7Ir7cFf93OL?e=qTRAKp">
							Resume
						</a>
					</button>
				</div>
			</header>

			<AboutMe />

			<Skills />
			<Projects />

			<ContactCard />

			<footer>
				<div className="socials">
					<a href="https://github.com/alyssasitto">
						<img src="images/github.svg" className="social"></img>
					</a>
					<a href="https://www.linkedin.com/in/alyssasitto">
						<img src="images/linkedin.svg" className="social"></img>
					</a>
					<a href="mailto:alyssasitto1@gmail.com">
						<img src="images/envelope.svg" className="social"></img>
					</a>
				</div>
				<small>Designed and Built by Alyssa Sitto</small>
			</footer>
		</div>
	);
}

export default Home;
