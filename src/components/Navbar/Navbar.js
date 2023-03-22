require("./Navbar.css");

const Navbar = ({ navState, setNavState }) => {
	const toggleNav = () => {
		setNavState(!navState);
	};

	const closeMenu = () => {
		setNavState(false);
	};

	return (
		<nav className={`padding-helper ${navState ? "active" : ""}`}>
			<div className="nav-logo">
				<p>AS</p>
			</div>
			<div>
				<button
					onClick={() => toggleNav()}
					className={navState ? "active" : ""}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul>
					<li style={{ transitionDelay: "2ms" }}>
						<a href="#skills" onClick={closeMenu}>
							Skills
						</a>
					</li>
					<li>
						<a href="#projects" onClick={closeMenu}>
							Projects
						</a>
					</li>
					<li className="contact" onClick={closeMenu}>
						<a href="#contact">Contact me</a>
					</li>

					<li className="resume-btn" onClick={closeMenu}>
						<a href="resume.pdf">Resumé</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
