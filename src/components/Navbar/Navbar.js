require("./Navbar.css");

function Navbar(props) {
	const clickMenu = () => {
		if (props.navState === "") {
			props.setNavState("active");
		}

		if (props.navState === "active") {
			props.setNavState("");
		}
	};

	const closeMenu = () => {
		props.setNavState("");
	};

	return (
		<div className={"navbar " + props.navState}>
			<button onClick={clickMenu} className={"toggle " + props.navState}>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul>
				<li>
					<a href="#skills" onClick={closeMenu}>
						Skills
					</a>
				</li>
				<li>
					<a href="#projects" onClick={closeMenu}>
						Projects
					</a>
				</li>
				<li className="contact">
					<a href="#contact" onClick={closeMenu}>
						Contact me
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
