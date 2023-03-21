import Project from "../Project/Project";

import projects from "../../data/projectData";

require("./Projects.css");

const Projects = () => {
	return (
		<section id="projects" className="padding-helper">
			<h2>Featured Projects</h2>

			{projects.map((el, index) => {
				return <Project project={el} index={index} />;
			})}
		</section>
	);
};

export default Projects;
