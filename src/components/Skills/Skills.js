require("./Skills.css");

function Skills() {
	return (
		<section id="skills" className="skills-container">
			<h1>Skills</h1>

			<div className="skills">
				<div>
					<img src="images/react-logo.png" className="logo"></img>
					<h2>React</h2>
				</div>

				<div>
					<img
						src="images/mongodb-logo.png"
						className="logo mongo-helper"
					></img>
					<h2>MongoDB</h2>
				</div>

				<div>
					<img
						src="images/nodejs-logo.png"
						className="logo logo-helper-smaller"
					></img>
					<h2>NodeJS</h2>
				</div>

				<div>
					<img src="images/html-logo.png" className="logo"></img>
					<h2>HTML5</h2>
				</div>

				<div>
					<img src="images/css-logo.png" className="logo"></img>
					<h2>CSS</h2>
				</div>

				<div>
					<img
						src="images/js-logo.png"
						className="logo logo-helper-smaller"
					></img>
					<h2>JavaScript</h2>
				</div>
			</div>
		</section>
	);
}

export default Skills;
