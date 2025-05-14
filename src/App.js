import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactCard from "./components/ContactCard/ContactCard";
import Footer from "./components/Footer/Footer";

function App() {
	const [navState, setNavState] = useState(false);
	return (
		<div className={`app ${navState ? "active" : ""}`}>
			<Navbar navState={navState} setNavState={setNavState} />
			<Header />
			<AboutMe />
			<Skills />
			<Projects />
			{/* <ContactCard /> */}
			<Footer />
		</div>
	);
}

export default App;
