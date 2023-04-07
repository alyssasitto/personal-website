import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

import Skill from "../Skill/Skill";
import skills from "../../data/skillsData";

require("./Skills.css");

const Skills = () => {
	const [ref, { entry }] = useIntersectionObserver({ threshold: 0.1 });
	const isVisible = entry && entry.isIntersecting;
	const [inView, setInView] = useState("");

	useEffect(() => {
		if (isVisible) {
			setInView("fade-in");
		}
	}, [isVisible]);

	return (
		<section ref={ref} id="skills" className={`padding-helper ${inView}`}>
			<h2>Skills</h2>

			<div className="skills-container">
				<div className="row slide-right">
					{skills.slice(0, 3).map((el) => {
						return <Skill skill={el} />;
					})}
				</div>

				<div className="row slide-left">
					{skills.slice(3, 6).map((el) => {
						return <Skill skill={el} />;
					})}
				</div>

				<div className="row slide-right">
					{skills.slice(6, 9).map((el) => {
						return <Skill skill={el} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
