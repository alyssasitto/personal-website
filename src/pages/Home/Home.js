import Skills from "../../components/Skills/Skills";

require("./Home.css");

function Home() {
	return (
		<div className="home-page">
			<header>
				<img src="images/header-img.png"></img>
				<h1>Hello I'm Alyssa</h1>
				<p>
					I'm an aspiring web developer from southern California with a passion
					for coding. I turn my ideas into user-friendly and aesthetically
					pleasing web applications with a goal of providing the best possible
					service. Check out my work below to get an idea of who I am.
				</p>
			</header>

			<Skills />
		</div>
	);
}

export default Home;
