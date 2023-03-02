import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

require("./Skills.css");

function Skills() {
	const [ref, refInView] = useInView({ threshold: 0.8 });
	const [inView, setInView] = useState("");
	const [slide, setSlide] = useState("");

	useEffect(() => {
		if (refInView) {
			setInView("fade-in");
			setSlide("slide");
		}
	}, [refInView]);

	return (
		<section ref={ref} id="skills" className={"skills-container " + inView}>
			<h2>Skills</h2>

			<div className="skills">
				<div className={"container " + slide}>
					<div>
						<img src="images/react-logo.png" className="logo"></img>
						<p>React</p>
					</div>

					<div>
						<img
							src="images/mongodb-logo.png"
							className="logo mongo-helper"
						></img>
						<p>MongoDB</p>
					</div>

					<div>
						<img
							src="images/nodejs-logo.png"
							className="logo logo-helper-smaller"
						></img>
						<p>NodeJS</p>
					</div>
				</div>

				<div className={"container " + slide}>
					<div>
						<img src="images/html-logo.png" className="logo"></img>
						<p>HTML5</p>
					</div>

					<div>
						<img src="images/css-logo.png" className="logo"></img>
						<p>CSS3</p>
					</div>

					<div>
						<img
							src="images/js-logo.png"
							className="logo logo-helper-smaller"
						></img>
						<p>JavaScript</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
