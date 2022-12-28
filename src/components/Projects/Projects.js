import { Link } from "react-router-dom";
require("./Projects.css");

function Projects() {
	return (
		<div className="projects-container">
			<h1>Featured Projects</h1>
			<div className="projects">
				<section className="project-card">
					<img src="images/spotify-app.png"></img>
					<div>
						<h2>Spotify Clone</h2>
						<p>
							An application that uses Spotify's web API and OAuth 2.0. A user
							must have a premium Spotify account to access the application.{" "}
						</p>
						<a href="https://alyssas-spotify-clone.netlify.app" target="_blank">
							View project
						</a>
					</div>
				</section>

				<section className="project-card">
					<img src="images/nutrition-app.png"></img>
					<div>
						<h2>Healthy Living</h2>
						<p>
							An application that calculates and keeps track of calories one
							needs to lose, gain, or maintain weight depending on their
							dimensions and goal.
						</p>
						<a href="https://healthy-living2.netlify.app" target="_blank">
							View project
						</a>
					</div>
				</section>

				<section className="project-card">
					<img src="images/game-app.png"></img>
					<div>
						<h2>Cat Fishing</h2>
						<p>2D game built using canvas</p>
						<a
							href="https://alyssasitto.github.io/cat-fishing-game"
							target="_blank"
						>
							View project
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Projects;
