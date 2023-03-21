require("./Skill.css");

const Skill = ({ skill }) => {
	return (
		<div className={"skill " + skill.name.toLowerCase()}>
			<img src={skill.img} alt={`${skill.name} logo`}></img>
			<h3>{skill.name}</h3>
		</div>
	);
};

export default Skill;
