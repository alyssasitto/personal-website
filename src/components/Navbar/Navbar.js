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

	return (
		<div className={"navbar " + props.navState}>
			<button onClick={clickMenu} className={"toggle " + props.navState}>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul>
				<li>Skills</li>
				<li>Projects</li>
				<li>Contact me</li>
			</ul>
		</div>
	);
}

export default Navbar;
