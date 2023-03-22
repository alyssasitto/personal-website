import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import Project from "../Project/Project";

import projects from "../../data/projectData";

require("./Projects.css");

const Projects = () => {
	const [ref, { entry }] = useIntersectionObserver();
	const isVisible = entry && entry.isIntersecting;
	const [inView, setInView] = useState("");

	useEffect(() => {
		if (isVisible) {
			setInView("fade-in");
		}
	}, [isVisible]);

	return (
		<section ref={ref} id="projects" className={`padding-helper ${inView}`}>
			<h2>Featured Projects</h2>

			<div className="projects-container">
				{projects.map((el, index) => {
					return <Project project={el} index={index} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
