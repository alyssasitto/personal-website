const projects = [
	{
		title: "Color Theme Visualizer",
		img: "images/theme-app.png",
		github: "https://github.com/alyssasitto/color-theme-visualizer",
		liveLink: "https://color-scheme-visualizer.netlify.app",
		details: [
			`A color theme
						visualizer designed to provide users with an intuitive platform to
						experiment with different color combinations.`,
			`The website features a layout that users can customize with colors
						of their choice, as well as pre-built color themes for users to
						choose from. Additionally, users can enter their own custom color
						themes to further personalize the experience.`,
			`To ensure fast and efficient rendering, I utilized React to build
						the application, while also implementing Redux for state management.
						Furthermore, I incorporated an external library called Swiper to add
						a dynamic swiping effect to the color themes.`,
		],
		tools: ["React", "Redux", "CSS"],
	},
	{
		title: "Spotify Clone",
		img: "images/spotify-app.png",
		github: "https://github.com/alyssasitto/spotify-client",
		liveLink: "https://alyssas-spotify-clone.netlify.app",
		details: [
			`	Spotify clone that replicates the popular music streaming service
						Spotify, allowing users to search for and play their favorite songs.`,
			`To authenticate users and authorize access to Spotify's API, I used
						Spotify's OAuth 2.0 authentication flow. This process involved
						requesting access from users to grant the application permission to
						access their Spotify account. After the user granted access, the
						application was able to retrieve information from their Spotify
						account and display it on the web page.`,
			`To enable the user to play music, I used Spotify's Web SDK, which
						provides a set of APIs that allow developers to interact with
						Spotify's music library. The Web SDK enables playback control,
						allowing users to pause, play, and skip tracks.`,
		],
		tools: ["React", "Express", "Auth 2.0"],
	},
	{
		title: "Healthy Living",
		img: "images/nutrition-app.png",
		github: "https://github.com/alyssasitto/nutrition-app-client",
		liveLink: "https://healthy-living2.netlify.app",
		details: [
			`Application allows users to sign in and enter their body dimensions,
						such as height and weight, and based on their goals, the app will
						determine their calorie intake for losing, gaining, or maintaining
						their weight.`,
			`Built using MongoDB for database management, Express for backend web
						development, React for frontend web development, and Node.js for
						server-side scripting.`,
			`I used jsonwebtoken
						for authentication and authorization. This means that only
						authorized users are able to access certain parts of the
						application, and all user information is kept secure through
						encrypted tokens.`,
		],
		tools: ["React", "Express", "MongoDB", "JWT"],
	},
	{
		title: "Cat Fishing",
		img: "images/game-app.png",
		github: "https://github.com/alyssasitto/cat-fishing-game",
		liveLink: "https://alyssasitto.github.io/cat-fishing-game",
		details: [
			`A 2D desktop game
						using vanilla JavaScript, HTML, and CSS. The game's functionality is
						made possible through the use of canvas, which allowed me to create
						and manipulate graphics.`,
			`The goal of the game is for the user to catch as many fish as
						possible while avoiding dead fish. The user is able to move back and
						forth by using the left and right arrow keys.`,
			`I implemented
						winning and losing logic into the game. The user earns points for
						each fish caught, and the game ends if the user touches a dead fish.`,
		],
		tools: ["HTML", "CSS", "JavaScript"],
	},
];

export default projects;
