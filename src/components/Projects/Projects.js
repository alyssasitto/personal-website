import { Link } from "react-router-dom";

require("./Projects.css");

function Projects() {
	const readMore = (e) => {
		e.target.parentElement.parentElement.parentElement.classList.add("active");
	};

	const readLess = (e) => {
		e.target.parentElement.parentElement.parentElement.classList.remove(
			"active"
		);
	};

	return (
		<div id="projects">
			<h2>Featured Projects</h2>
			<div className="projects-container">
				<section className="project-card spotify-proj">
					<div className="card-heading">
						<h3>Spotify Clone</h3>
						<a
							className="proj-link"
							href="https://alyssas-spotify-clone.netlify.app/"
						>
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
					</div>

					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						Spotify clone that replicates the popular music streaming service
						Spotify, allowing users to search for and play their favorite songs.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						To authenticate users and authorize access to Spotify's API, I used
						Spotify's OAuth 2.0 authentication flow. This process involved
						requesting access from users to grant the application permission to
						access their Spotify account. After the user granted access, the
						application was able to retrieve information from their Spotify
						account and display it on the web page.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						To enable the user to play music, I used Spotify's Web SDK, which
						provides a set of APIs that allow developers to interact with
						Spotify's music library. The Web SDK enables playback control,
						allowing users to pause, play, and skip tracks.
					</p>
					<div className="buttons">
						<a href="https://alyssas-spotify-clone.netlify.app">
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
						<a href="https://github.com/alyssasitto/spotify-client">
							<img
								src="images/github.svg"
								alt="Gitub icon"
								className="img-helper"
							/>
						</a>
					</div>
					<div className="rm-rl-btns">
						<button onClick={(e) => readMore(e)} className="read-more">
							<p>Read more</p>
							<img src="images/double-right-arrow.svg" alt="Right arrow"></img>
						</button>
						<button onClick={(e) => readLess(e)} className="read-less">
							<img src="images/double-left-arrow.svg" alt="Left arrow"></img>
							<p>Read less</p>
						</button>
					</div>
				</section>

				<section className="project-card nutrition-proj">
					<div className="card-heading">
						<h3>Healthy Living</h3>
						<a className="proj-link" href="https://healthy-living2.netlify.app">
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
					</div>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						Application allows users to sign in and enter their body dimensions,
						such as height and weight, and based on their goals, the app will
						determine their calorie intake for losing, gaining, or maintaining
						their weight.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						Built using MongoDB for database management, Express for backend web
						development, React for frontend web development, and Node.js for
						server-side scripting.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>I used jsonwebtoken
						for authentication and authorization. This means that only
						authorized users are able to access certain parts of the
						application, and all user information is kept secure through
						encrypted tokens.
					</p>
					<div className="buttons">
						<a href="https://healthy-living2.netlify.app">
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
						<a href="https://github.com/alyssasitto/nutrition-app-client">
							<img
								src="images/github.svg"
								alt="Gitub icon"
								className="img-helper"
							/>
						</a>
					</div>
					<div className="rm-rl-btns">
						<button onClick={(e) => readMore(e)} className="read-more">
							<p>Read more</p>
							<img src="images/double-right-arrow.svg" alt="Right arrow"></img>
						</button>
						<button onClick={(e) => readLess(e)} className="read-less">
							<img src="images/double-left-arrow.svg" alt="Left arrow"></img>
							<p>Read less</p>
						</button>
					</div>
				</section>

				<section className="project-card game-proj">
					<div className="card-heading">
						<h3>Cat Fishing</h3>
						<a
							className="proj-link"
							href="https://alyssasitto.github.io/cat-fishing-game"
						>
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
					</div>

					<p>
						<img src="images/star.svg" alt="Star icon"></img> A 2D desktop game
						using vanilla JavaScript, HTML, and CSS. The game's functionality is
						made possible through the use of canvas, which allowed me to create
						and manipulate graphics.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>
						The goal of the game is for the user to catch as many fish as
						possible while avoiding dead fish. The user is able to move back and
						forth by using the left and right arrow keys.
					</p>
					<p>
						<img src="images/star.svg" alt="Star icon"></img>I implemented
						winning and losing logic into the game. The user earns points for
						each fish caught, and the game ends if the user touches a dead fish.
					</p>

					<div className="buttons">
						<a href="https://alyssasitto.github.io/cat-fishing-game">
							<img src="images/eye.svg" alt="Eye icon" />
						</a>
						<a href="https://github.com/alyssasitto/cat-fishing-game">
							<img
								src="images/github.svg"
								alt="Gitub icon"
								className="img-helper"
							/>
						</a>
					</div>
					<div className="rm-rl-btns">
						<button onClick={(e) => readMore(e)} className="read-more">
							<p>Read more</p>
							<img src="images/double-right-arrow.svg" alt="Right arrow"></img>
						</button>
						<button onClick={(e) => readLess(e)} className="read-less">
							<img src="images/double-left-arrow.svg" alt="Left arrow"></img>
							<p>Read less</p>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Projects;
