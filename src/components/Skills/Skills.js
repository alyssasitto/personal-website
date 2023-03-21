import Skill from "../Skill/Skill";
import skills from "../../data/skillsData";

require("./Skills.css");

const Skills = () => {
	return (
		<section id="skills" className="padding-helper">
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
