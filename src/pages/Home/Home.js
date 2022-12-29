import { useState } from "react";

import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContactCard from "../../components/ContactCard/ContactCard";
import Navbar from "../../components/Navbar/Navbar";

import Typewriter from "typewriter-effect";

require("./Home.css");

function Home() {
	const [navState, setNavState] = useState("");

	return (
		<div className={"home-page " + navState}>
			<Navbar navState={navState} setNavState={setNavState} />
			<header>
				<div className="header-content">
					<h1 className="heading">
						<Typewriter
							options={{ loop: true }}
							onInit={(typewriter) => {
								typewriter

									.typeString("Hello, I'm Alyssa")
									.pauseFor(1000)
									.deleteAll()
									.typeString("I make things for the web")
									.pauseFor(1000)
									.start();
							}}
						/>
					</h1>

					<p>
						I'm an aspiring web developer from southern California with a
						passion for coding. I turn my ideas into user-friendly and
						aesthetically pleasing web applications.
					</p>
				</div>

				<img src="images/hero.png" className="hero"></img>
			</header>

			<Skills />

			<Projects />

			<ContactCard />

			<footer>
				<div className="socials">
					<a href="https://github.com/alyssasitto">
						<img src="images/github-logo.png" className="social"></img>
					</a>
					<a href="https://www.linkedin.com/in/alyssasitto">
						<img src="images/linkedin-logo.png" className="social"></img>
					</a>
					<a href="mailto:alyssasitto1@gmail.com">
						<img src="images/email-logo.png" className="social"></img>
					</a>
				</div>
				<small>Designed and Built by Alyssa Sitto</small>
			</footer>
		</div>
	);
}

export default Home;
