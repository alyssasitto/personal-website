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
		<nav className={"navbar " + props.navState}>
			<div className="nav-logo">
				<p>AS</p>
			</div>
			<div>
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

					<li className="resume-btn-nav">
						<a href="https://1drv.ms/w/s!Ai9wUWsSlzZ1hzz4A7Ir7cFf93OL?e=qTRAKp">
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
