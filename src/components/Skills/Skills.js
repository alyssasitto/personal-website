require("./Skills.css");

function Skills() {
	return (
		<section id="skills" className="skills-container">
			<h2>Skills</h2>

			<div className="skills">
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
		</section>
	);
}

export default Skills;
