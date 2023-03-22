import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

require("./Project.css");

const Project = ({ project, index }) => {
	const [ref, { entry }] = useIntersectionObserver();
	const isVisible = entry && entry.isIntersecting;
	const [inView, setInView] = useState("");

	const readMore = (e) => {
		e.target.parentElement.parentElement.parentElement.classList.add("active");
	};

	const readLess = (e) => {
		e.target.parentElement.parentElement.parentElement.classList.remove(
			"active"
		);
	};

	useEffect(() => {
		if (isVisible) {
			setInView("fade-in");
		}
	}, [isVisible]);

	return (
		<div
			ref={ref}
			className={`card-container ${inView} ${
				index === 1 || index === 3 ? "rr-helper" : ""
			}`}
		>
			<img src={project.img} className="proj-img"></img>
			<div className="project-card">
				<div className="card-heading">
					<h3>{project.title}</h3>
					<a className="proj-link" href={project.liveLink}>
						<img
							src="images/eye.svg"
							className="icon mt-helper"
							alt="Eye icon"
						/>
					</a>
				</div>

				<div className="bullets">
					{project.details.map((el) => {
						return (
							<p className="bullet">
								<img src="images/star.svg" className="icon" alt="Star icon" />{" "}
								{el}
							</p>
						);
					})}
				</div>

				<div className="links">
					<a href={project.liveLink}>
						<img src="images/eye.svg" className="icon" alt="Eye icon" />
					</a>
					<a href={project.github}>
						<img src="images/github.svg" className="icon" alt="Gitub icon" />
					</a>
				</div>

				<div className="rm-rl-btns">
					<button onClick={(e) => readMore(e)} className="read-more">
						<p>Read more</p>
						<img src="images/double-right-arrow.svg" alt="Right arrow"></img>
					</button>
					<button onClick={(e) => readLess(e)} className="read-less">
						<img src="images/double-left-arrow.svg" alt="Left arrow"></img>
						<p>Read less</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
